import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import * as util from '../ethereum/utils';

export default class Debug extends Component {
    render() {
        return (
            <div>
                <p>
                    <Button onClick={async () => console.log(await util.getListing())} variant="primary" size="lg">Listing</Button>
                </p>
                <p>
                    <Button onClick={async () => console.log(await util.createFarmer())} variant="primary" size="lg">Create Farmer</Button>
                </p><p>
                    <Button onClick={ async () => console.log(await util.getContractAddressesForFarmer())} variant="primary" size="lg">getContractAddressesForFarmer</Button>
                </p><p>
                    <Button onClick={ async () => console.log(await util.getCropContractForFarmer())} variant="primary" size="lg">getCropContractForFarmer</Button>
                </p><p>
                    <Button onClick={ async () => console.log(await util.getGovtContractForFarmer())} variant="primary" size="lg">getGovtContractForFarmer</Button>
                </p><p>
                    <Button onClick={ async () => console.log(await util.getCropFactoryContract())} variant="primary" size="lg">getCropFactoryContract</Button>
                </p>
                <p>
                    <Button onClick={ async () => console.log(await util.initWeb3())} variant="primary" size="lg">initWeb3</Button>
                </p>

            </div>



        )
    }
}


