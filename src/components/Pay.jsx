import React from "react";
import { getCropContractForFarmer, getDefaultAccount } from '../ethereum/utils';
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

function Pay() {
    const {  handleSubmit } = useForm();
    const onSubmitHook = async () => {
            let cropContract = await getCropContractForFarmer();
            await cropContract.methods.payInvestors().send({ from: getDefaultAccount() })
        }
    return (
        <div class="payamt">
            <form onSubmit={handleSubmit(onSubmitHook)}>
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <div class="form-group row">
                                <label for="inputAddres" class="col-sm-2 col-form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Wallet Address" />
                            </div>
                            <p>Would you like to pay the investors?</p>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Pay;