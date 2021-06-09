import React from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom'

function Display()
{

    const { push } = useHistory()
    onInvest = async () => {
        

    return(
        <div classname="displayrequests">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <div class="card">
                            <h5 class="card-header">Title</h5>
                            <div class="card-body">
                                <h5 class="card-title">Amount</h5>
                                <p class="card-text">Credit Score</p>
                                <p class="card-text">Days</p>
                                <Button onClick={this.onInvest} variant="primary" size="lg">Invest</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>

    );
}

export default Display;