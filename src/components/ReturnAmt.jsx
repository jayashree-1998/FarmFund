import React from 'react';
import { getGovtContractForFarmer, getDefaultAccount } from '../ethereum/utils';
import { useForm } from "react-hook-form";

function ReturnAmt() {
    const { register, handleSubmit } = useForm();
    const onSubmitHook = async (data) => {
            let cropContract = await getGovtContractForFarmer();
            await cropContract.methods.createRequest(data.amount).send({ from: getDefaultAccount() })
    }
    return (
        <div classname="returnamount">
            <form onSubmit={handleSubmit(onSubmitHook)}>
                <div class="form group">
                    <div class="container">
                        <div class="row align-items-center my-5">
                            <div class="form-group row">
                                <p>Enter the return amount</p>
                                <label for="Amount" class="col-sm-2 col-form-label">Amount</label>
                                <input type="text" class="form-control" id="Amount" placeholder="Amount in GWEI" {...register('amount')} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ReturnAmt;