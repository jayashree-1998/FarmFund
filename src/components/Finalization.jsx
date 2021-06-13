import React from "react";
import * as utils from '../ethereum/utils';
import { useForm } from "react-hook-form";

function Finalization() {
    
    console.log("a");
    const { handleSubmit } = useForm();
    const onSubmitHook = async () => {
    await utils.initWeb3()
    
        try {
            let contractAddress = await utils.getContractAddressesForFarmer()
            console.log("contractaddress", contractAddress);
            let cropContract = await utils.getCropContractForAddress(contractAddress[0])
            let amtRais =  await cropContract.methods.amtRaised.call({from: utils.getDefaultAccount()}).call({from: utils.getDefaultAccount()})
            console.log("amountRaised" ,amtRais);
            await cropContract.methods.finalizeRequest().send({from: utils.getDefaultAccount()})
        }
        catch (e) {
        console.error(e)}
        }
        return (
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