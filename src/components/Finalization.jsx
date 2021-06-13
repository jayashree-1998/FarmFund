import React from "react";
import { getCropContractForFarmer, getDefaultAccount } from '../ethereum/utils';
import { useForm } from "react-hook-form";

function Finalization()
{
    const { register, handleSubmit } = useForm();
    const onSubmitHook = async () => {
            let cropContract = await getCropContractForFarmer();
            await cropContract.methods.finalizeRequest().send({ from: getDefaultAccount() }) }
    return(
        <div class="finalize">
            <form onSubmit={handleSubmit(onSubmitHook)}>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                            <p>Would you like to finalize your request?</p>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>    
            </div>
        </form> 
        </div>
    )
}

export default Finalization;