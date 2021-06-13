// const RequestFactory  = require('../built-contracts/RequestFactory.json')
// const Govt = require('../built-contracts/GovtInput.json')
import Web3 from 'web3';
// const GovtABI = Govt.abi
// const RequestFactoryABI = RequestFactory.abi

import {abi as GovtABI} from '../built_contracts/GovtInput.json' 
import {abi as CropFactoryABI} from '../built_contracts/CropFactory.json'
import {abi as CropABI} from '../built_contracts/Crop.json'

const CROP_FACTORY_ADDRESS = '0x76A6C92887CccE29b579427ceE2be5FDCb1f83A7'
//const GOVT_ADDRESS = '0x2D0051f4b9fc09CD0d4cB94bBC35aaFF84E7f9cc'

let defaultAccount
let web3Instance
let cropFactoryContract
//let govtContract

// TODO: DO NOT USE IN FINAL CODE, CREATE HIGHER ORDER COMPONENT OR CONTEXT WRAPPER TO GET WEB3
// DO NOT REPAT initWeb3 calls in each component
export async function initWeb3() {
    if(!window.ethereum) {
        console.error("We are not in an web3 supported browser. Is metamask loaded?")
        return 
    }
    web3Instance = new Web3(window.ethereum)
    let accounts = [];
    try {
        
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        defaultAccount = accounts[0];
    } catch(e) {
        console.error("User DENIED")
    }
    console.log("Found accounts: ", accounts)
    cropFactoryContract = new web3Instance.eth.Contract(CropFactoryABI, CROP_FACTORY_ADDRESS)
   // govtContract = new web3Instance.eth.Contract(GovtABI, GOVT_ADDRESS)
    console.log(`Request Factory (${CROP_FACTORY_ADDRESS})`)
}

export function getWeb3() {
    return web3Instance;
}

export function getDefaultAccount() {
    return defaultAccount;
}

export async function getListing() {
    return getCropFactoryContract().methods.getFarmerContractMapping().call()
}

export async function createFarmer() {
    return getCropFactoryContract().methods.createCropForFarmer().send({from : defaultAccount})
}

export async function getContractAddressesForFarmer() {
    console.debug("Getting Contract addresses")
    return getCropFactoryContract().methods.getContractsForFarmer().call({from : defaultAccount})
}

export async function getCropContractForFarmer() {
    let contractAddresses = await getContractAddressesForFarmer()
    console.debug("Addreses", contractAddresses, contractAddresses.crop);
    return new web3Instance.eth.Contract(CropABI,contractAddresses.crop)
}

export async function getCropContractForAddress(contractAddress) {
    return new web3Instance.eth.Contract(CropABI,contractAddress)
}

export async function getGovtContractForFarmer() {
    return new web3Instance.eth.Contract(GovtABI,(await getContractAddressesForFarmer()).govrep)
}

export function getCropFactoryContract() {
    if(web3Instance)
        return cropFactoryContract
    else
        throw new Error('Web3 Not Ready')
}

//  export function getGovtContract() {
//     if(web3Instance)
//         return govtContract
//     else
//         throw new Error('Web3 Not Ready')
// }

// export function getCropContract() {
//     if(web3Instance)
//         return new web3Instance.eth.Contract(CropABI)
//     else
//         throw new Error('Web3 Not Ready')
// } 