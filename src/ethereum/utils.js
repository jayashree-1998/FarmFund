// const RequestFactory  = require('../built-contracts/RequestFactory.json')
// const Govt = require('../built-contracts/GovtInput.json')
import Web3 from 'web3';
// const GovtABI = Govt.abi
// const RequestFactoryABI = RequestFactory.abi

import {abi as GovtABI} from '../built_contracts/GovtInput.json' 
import {abi as RequestFactoryABI} from '../built_contracts/RequestFactory.json'
import {abi as CropABI} from '../built_contracts/Crop.json'

const REQUEST_FACTORY_ADDRESS = '0x98F681D872f880a7a18f9891056006967c5241B3'
const GOVT_ADDRESS = '0x2D0051f4b9fc09CD0d4cB94bBC35aaFF84E7f9cc'

let web3Instance
let requestFactoryContract
let govtContract

export async function initWeb3() {
    if(!window.ethereum) {
        console.error("We are not in an web3 supported browser. Is metamask loaded?")
        return 
    }
    web3Instance = new Web3(window.ethereum)
    let accounts = [];
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch(e) {
        console.error("User DENIED")
    }
    console.log("Found accounts: ", accounts)
    requestFactoryContract = new web3Instance.eth.Contract(RequestFactoryABI, REQUEST_FACTORY_ADDRESS)
    govtContract = new web3Instance.eth.Contract(GovtABI, GOVT_ADDRESS)
    console.log(`Loaded Contracts: Govt (${GOVT_ADDRESS}), Request Factory (${REQUEST_FACTORY_ADDRESS})`)
}

export function getRequestFactoryContract() {
    if(web3Instance)
        return requestFactoryContract
    else
        throw new Error('Web3 Not Ready')
}

export function getGovtContract() {
    if(web3Instance)
        return govtContract
    else
        throw new Error('Web3 Not Ready')
}

export function getCropContract(address) {
    if(web3Instance)
        return new web3Instance.eth.Contract(CropABI,address)
    else
        throw new Error('Web3 Not Ready')
}


