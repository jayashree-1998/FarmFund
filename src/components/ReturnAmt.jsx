import React, { useEffect } from 'react';
import { getDefaultAccount } from '../ethereum/utils';
import { useForm } from "react-hook-form";
import * as utils from '../ethereum/utils';

function ReturnAmt() {
    const { register, handleSubmit } = useForm();
    const onVisitReturnAmt = async (data) => {
        await utils.initWeb3()
        let govtContract = await utils.getGovtContractForFarmer(data.farmerAddr)
        let result = await govtContract.methods.getRetAmt(+(data.amount - 1)).send({ from: getDefaultAccount(), value: +(data.amount * 10 ** 18) })
        console.log(result);
    }
    
    return (
        <div classname="returnamount">
            <form onSubmit={handleSubmit(onVisitReturnAmt)}>
                <div class="form group">
                    <div class="container">
                        <div class="col align-items-center my-5">
                            <div class="form-group row">
                                <label for="Amount" class="col-sm-2 col-form-label">Amount</label>
                                <input type="text" class="form-control" id="Amount" placeholder="Amount in Ether" {...register('amount')} />
                            </div>
                            <div class="form-group row">
                                <label for="Amount" class="col-sm-2 col-form-label">Farmer Address</label>
                                <input type="text" class="form-control" id="Farmer" placeholder="Address of farmer" {...register('farmerAddr')} />
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