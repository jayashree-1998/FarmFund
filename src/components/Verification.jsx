import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getCropContract } from '../ethereum/utils';

class Verification extends Component{
    state = {
        accountAddress: ''
    };

    handleInputChange = (event) => {
        let input = event.target;
        let value = input.value;
        this.setState({
            accountAddress: value
        });
    }

    accountaddress = async () => {
        let cropContract = getCropContract();
        
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        
        await cropContract.methods.VarifiedOrNot(this.state.accountAddress).send({ from: account });
        
    }
    render() {

        return (

            <div classname="verify">

                <form>
                    <div class="form group">
                        <div class="container">
                            <div class="row align-items-center my-5">
                                <div class="col-lg-7">
                                    <label for="wallet">Enter Your Wallet address</label>
                                    <input type="text" class="form-control" id="walletaddress" aria-describedby="address" placeholder="Enter address" onChange={this.handleInputChange} />
                                    <small id="address" class="form-text text-muted">We'll never share your address with anyone else.</small>
                                </div>
                            </div>
                            <button onClick={this.accountaddress} type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
};
export default Verification;