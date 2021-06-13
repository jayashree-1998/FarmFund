import React, {useEffect, useState} from 'react';
import { Button } from "react-bootstrap";
import * as utils from "../ethereum/utils"
import { useHistory } from 'react-router-dom'

function Display()
{
    const { push } = useHistory()
    const [investables, setInvestables] = useState([])

    const fetchAndPopulate = async () => {
        await utils.initWeb3()
        let entities = await utils.getListing()
        console.log(entities)
        const entityPromiseMap = entities.map(async (entity) => {
            let cropAddress = entity.crop;
            let cropContract = await utils.getCropContractForAddress(cropAddress);
            let reputation =  await cropContract.methods.reputation.call({from: utils.getDefaultAccount()}).call({from: utils.getDefaultAccount()})
            let requesNo =  await cropContract.methods.requestNo.call({from: utils.getDefaultAccount()}).call({from: utils.getDefaultAccount()})

            console.log("requests",requesNo);
            let summary = await cropContract.methods.requests(+requesNo - 1).call({from: utils.getDefaultAccount()})
            const onInvest = async () => {
                //const weiAmt = utils.getWeb3().toWei(summary.amount,"ether")
                let result = await cropContract.methods.investment().send({from: utils.getDefaultAccount(), value: 5*10**18})
                console.log(result)
            }
            return {...summary,reputation,onInvest}
        })
        const resolvedEntities = await Promise.all(entityPromiseMap)
        // const entityObjects = resolvedEntities.map((entityArray)=> {
        //     return {

        //     }
        // })
        console.log(resolvedEntities)
        setInvestables(resolvedEntities)
    }

    useEffect(() => {
        fetchAndPopulate()     
        
    }, [])
 
    // const onInvest = async () => {
    //     await utils.initWeb3()
    //     let entities = await utils.getListing()
    //     const entityPromiseMap = entities.map(async (entity) => {
    //     let cropAddress = entity.crop;
    //     let cropContract = await utils.getCropContractForAddress(cropAddress);
    //    await cropContract.methods.investment().call({from: utils.getDefaultAccount()})
    // }

    return(
        <div classname="displayrequests">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">

                        {
                            investables.map((investable, idx) => 
                                <div key={idx} class="card">
                                    <h5 class="card-header">{investable.description}</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">Amount: {investable.amount}</h5>
                                        <p class="card-text">Credit Score: {investable.reputation}</p>
                                        <p class="card-text">Days: {investable.no_of_days}</p>
                                        <Button onClick={investable.onInvest} variant="primary" size="lg">Invest</Button>
                                    </div>
                                </div>
                            )                    
                        }                        
                    </div>
                </div>
            </div>    
        </div>

    );
}

export default Display;