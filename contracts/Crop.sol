// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import './GovtInput.sol';

contract Crop{
    struct Request{
        string description;
        uint amount;
        uint no_of_days;
        address payable receiver;
        uint expirydate;
        uint investorsCount;
        bool complete;
    }
    
    GovtInput gov;
    
    /*function setAddress(address _address) public{
        gov = GovtInput(_address);
    }*/
    
    Request[] public requests; 
    
    uint256 public amtRaised = 0;
    uint public minInvestment = 1;
    uint256 public reputation = 0;
    bool public returned = false;
    bool public verified = false;
    uint256[] public investedPercent;
    address[] public investorsAddress;
    mapping(uint => address) public investors;  
    mapping(address => uint) public investAmt;
    address public farmer;
    uint public requestNo = 0;
    
    modifier authorization()
    {
        require(msg.sender == farmer);
        _;
    }

     constructor(address creator){
        farmer = creator;
    }

    /*function MainAccountAddress(address _farmer) public{
        farmer = _farmer;
    } */

    function investment() public payable{
        Request storage request = requests[requestNo - 1];
        
        require(request.complete == false);
        require(block.timestamp < request.expirydate);
        require(msg.value >= minInvestment);
        
        amtRaised = amtRaised + msg.value;
        
        investors[request.investorsCount] = msg.sender;
        
        request.investorsCount++;
        
        investAmt[msg.sender] = msg.value;
    }

    function investorCount(uint requestID) public view returns(uint) {
        Request storage request = requests[requestID];
        return(
            request.investorsCount
            );
    }

    function createRequest(string memory description, uint amount, uint no_of_days, address payable receiver) public authorization{
        reputation = gov.setRep();
        if(requestNo > 0){
        returned = gov._returned();
        require(reputation > 40);
        require(returned == true);
        }
        else {
        verified = gov.verification();
        require(verified == true);
        }
        Request memory newReq = Request({
            description : description,
            amount : amount,
            no_of_days : no_of_days,
            receiver : receiver,
            expirydate : block.timestamp + (86400 * no_of_days),
            investorsCount : 0,
            complete : false
        });

        requests.push(newReq);
        requestNo = requestNo + 1;
        returned = false;
    }

    function finalizeRequest() public payable authorization{
        Request storage request = requests[requestNo - 1];
        require(!request.complete);
        request.receiver.transfer(address(this).balance); // once farmer gets the amount he cannont get more investors
        request.complete = true;
    }
    
    function getSummary() public view returns (uint256[] memory,address[] memory, uint, uint, uint, uint, bool, bool, address) {
        return (
            investedPercent,
            investorsAddress,
            minInvestment,
            address(this).balance,  //request current balance of contract
            requests.length,
            reputation,
            verified,
            returned,
            farmer
            );
    }
   
    function getInvestPercentage() public {
        uint256 share;
        uint256 temp;
        uint i;
        Request storage request = requests[requestNo - 1 ];
        for(i = 0; i < request.investorsCount; i++)
        {
            investorsAddress.push(investors[i]);
            share = investAmt[investors[i]];
            temp = ( share * 100) / amtRaised;
            investedPercent.push(temp);
        }
        amtRaised = 0;
        
    }
    function retInvestPercentage() public view returns(uint256[] memory) {
        return investedPercent;
    }
     function retInvestAddress() public view returns(address[] memory) {
        return investorsAddress;
    }
    
    function resetInvestedPercentAndInvestorsAddress() public {
        Request storage request = requests[requestNo - 1];
        uint i;
        for(i = 0;i < request.investorsCount; i++)
        {
            investedPercent.pop();
            investorsAddress.pop();
        }
    }

    function VerifiedOrNot() public {
		verified = gov.verification();
	}
    
}
