// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "./Crop.sol";

contract CropFactory{
	uint i = 0;
	struct ContractAddresses{
		address crop;
		address govrep;
	}
	ContractAddresses[] public contractaddresses;
	address[] public farmerAddresses;

    mapping (address => ContractAddresses) public farmerContractMapping;

    function getContractsForFarmer() public view returns(ContractAddresses memory){
        return(farmerContractMapping[msg.sender]);
    }

    function createCropForFarmer() public payable{
		Crop newCrop = new Crop(msg.sender);
		GovtInput newGovrep = new GovtInput();
		newCrop.setAddress(address(newGovrep));
		newGovrep.setAddress(address(newCrop));
        farmerContractMapping[msg.sender] = ContractAddresses(address(newCrop),address(newGovrep));
		farmerAddresses[i] = msg.sender;
		contractaddresses[i] 
		i++;
    }
    
	function getFarmerContractMapping() public view returns(ContractAddresses[] memory){
	   /* ContractAddresses[] memory contrract = new ContractAddresses[](farmerAddresses.length);
	    for(uint i = 0; i < farmerAddresses.length; i++)
	    {
	        ContractAddresses storage contrract = contractaddresses[i];
	        contrract[i] = contrract;
	    } */
	    return contractaddresses;
	}
}
