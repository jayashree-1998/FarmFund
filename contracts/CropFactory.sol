// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "./Crop.sol";
import "./GovtInput.sol";
contract CropFactory{
	uint j = 0;
	struct ContractAddresses{
		address crop;
		address govrep;
	}
	ContractAddresses[] public contractaddresses;

    mapping (address => ContractAddresses) public farmerContractMapping;
    mapping (uint => address) public farmerAddresses;

    function getContractsForFarmer() public view returns(ContractAddresses memory){
        return(farmerContractMapping[msg.sender]);
    }

    function createCropForFarmer() public payable{
		Crop newCrop = new Crop(msg.sender);
		GovtInput newGovrep = new GovtInput();
		newCrop.setAddress(address(newGovrep));
		newGovrep.setAddress(address(newCrop));
        farmerContractMapping[msg.sender] = ContractAddresses(address(newCrop),address(newGovrep));
        farmerAddresses[j] = msg.sender; 
        contractaddresses.push(ContractAddresses(address(newCrop),address(newGovrep)));
		j++;
    }
    
	function getFarmerContractMapping() public view returns(ContractAddresses[] memory){
	    return contractaddresses;
	}
}