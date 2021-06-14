import React, { useState } from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import * as util from '../ethereum/utils';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Farmer() {
    const { push } = useHistory()
    //const requestFactoryContract = useState(getRequestFactoryContract())
    const notify = () => toast("Account Created", { position: toast.POSITION.BOTTOM_LEFT });

    return (
        <div className="farmer">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://www.svgimages.com/svg-image/s7/farmer-in-farm-512x512.png"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <p>
                            Create an Account!
                        </p>
                        <Button onClick={async () => { console.log(await util.createFarmer()); notify(); }} variant="primary" size="lg">Create Account</Button>

                        <p>
                            Create a Request!
                        </p>

                        <Button onClick={() => push('/create')} variant="primary" size="lg">Create</Button>
                        <p>
                            Finalize your request to obtain your amount.
                        </p>

                        <Button onClick={() => push('/finalize')} variant="primary" size="lg">Finalize</Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Farmer;