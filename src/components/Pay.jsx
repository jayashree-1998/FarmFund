import React from "react";
import { getDefaultAccount } from '../ethereum/utils';
import * as utils from '../ethereum/utils';
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";


function Pay() {

    const { register, handleSubmit } = useForm();
    const onSubmitHook = async (data) => {
        await utils.initWeb3()
        let govtContract = await utils.getGovtContractForFarmer(data.farmerAddr)
        await govtContract.methods.payInvestors().send({ from: utils.getDefaultAccount() })
    }
    return (
        <div class="payamt">
            <form onSubmit={handleSubmit(onSubmitHook)}>
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <div class="form-group row">
                                <label for="Amount" class="col-sm-2 col-form-label">Farmer Address</label>
                                <input type="text" class="form-control" id="Farmer" placeholder="Address of farmer" {...register('farmerAddr')} />
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