// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "./Crop.sol";

contract GovtInput{
    
    uint256 public returnAmt;
    bool public verified = false;
    uint256 public returnPercent;
    Crop rep;
    address public _farmer;
    uint256 public _reputation;
    bool public _returned = false;
    uint256[] public _returnPercent;
    address[] public _returnAddress;
    address payable temp1;
    bool public complete = false;
    uint length;
   
    
    /*function setAddress(address _address) public{
        rep = Crop(_address);
    }*/
     
     function getInvestAddressAndPercentage() public {
          rep.getInvestPercentage();
        _returnPercent =  rep.retInvestPercentage();
        _returnAddress =  rep.retInvestAddress();
        length = _returnPercent.length;
        rep.resetInvestedPercentAndInvestorsAddress();
     }
     function payInvestors() public payable {
         uint temp;
         uint i;
         for(i = 0; i < _returnPercent.length; i++)
         {
             temp = ((returnAmt * _returnPercent[i])/100) * (1 ether);
             temp1 = payable(_returnAddress[i]);
             temp1.transfer(temp);
         }
         _returned = true;
         resetInvestedPercentAndInvestorsAddress();
         
     }

    function setRep() public returns(uint256) {
         _farmer = rep.farmer();
         _reputation = rep.reputation();
        if(_reputation == 0)
        {
            _reputation = 50;
        }
        else{
            if(returnAmt > 0)
            {
                 
                if(returnPercent >= 0 && returnPercent < 40)
                    _reputation = _reputation - 10;
                else if(returnPercent >= 40 && returnPercent < 50)
                    _reputation = _reputation - 6;
                else if(returnPercent >= 50 && returnPercent < 60)
                    _reputation = _reputation - 4;
                else if(returnPercent >= 60 && returnPercent < 70)
                {
                    if(_reputation > 80)
                       _reputation = min(_reputation + 1,100);  
                    else
                       _reputation = min(_reputation + 2,100);
                }
                    
                else if(returnPercent >= 70 && returnPercent < 80)
                {
                    if(_reputation > 80)
                        _reputation = min(_reputation + 2,100);
                    else
                        _reputation = min(_reputation + 3,100);
                }
                
                else if(returnPercent >= 80 && returnPercent <= 100)
                {
                    if(_reputation > 80)
                        _reputation = min(_reputation + 3,100);
                    else
                        _reputation = min(_reputation + 5,100);
                }
            }
        }
        returnAmt = 0;
        complete = false;
        returnPercent = 0;
        return(_reputation);
    }
    
   function verification() public returns(bool){
         _farmer = rep.farmer();
        verified = true;
        return(verified);
    }

    function getRetAmt(uint _returnAmt) public payable{
        uint _amtRaised;
           require(complete == false);
           _returned = rep.returned();
        returnAmt = _returnAmt;
        _amtRaised = rep.amtRaised();
        returnPercent = (returnAmt * (1 ether) * 100)/_amtRaised;
        _returned = false;
        complete = true;
        
    }

    function min(uint256 a,uint256 b) private returns (uint256){
        if(a < b)
            return(a);
        else 
            return(b);
    }
    
    function getSummary() public view returns (uint256 [] memory, uint, address [] memory, uint, bool, bool,uint, address) {
        return (
            _returnPercent,
            address(this).balance,  //request current balance of contract
            _returnAddress,
            _reputation,
            verified,
            _returned,
            returnAmt,
            _farmer
            );
    }
   function resetInvestedPercentAndInvestorsAddress() private{
        uint i;
        for(i = 0;i < length; i++)
        {
            _returnPercent.pop();
            _returnAddress.pop();
        }
    }
}
