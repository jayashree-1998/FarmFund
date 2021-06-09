import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Investor() {
    const { push } = useHistory()
    return (
        <div className="invest">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Invest</h1>
                        <p>
                            Invest Today!
                        </p>
                        <Button onClick={() => push('/displayrequests')} variant="primary" size="lg">Invest</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Investor;