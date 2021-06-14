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
                            src="https://www.pngkey.com/png/full/244-2449850_india-ministry-of-agriculture-farmers-welfare-president-of.png"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
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