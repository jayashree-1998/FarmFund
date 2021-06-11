import React from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function Government() {
    const { push } = useHistory()
    return (
        <div className="gov">
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
                        <p>
                            Verify a farmer's account.
                        </p>
                        <Button onClick={() => push('/goverify')} variant="primary" size="lg">Verify</Button>
                        <p>
                            Add a return amount for a farmer
                        </p>
                        <Button onClick={() => push('/returnamount')} variant="primary" size="lg">Return Amount</Button>
                        <p>
                            Complete payments to investors
                        </p>
                        <Button onClick={() => push('/payamt')} variant="primary" size="lg">Pay</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Government;