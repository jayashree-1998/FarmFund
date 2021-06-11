import React, {useState} from "react";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
//import {getRequestFactoryContract} from '../ethereum/utils'

function Farmer() {
    const { push } = useHistory()
    //const requestFactoryContract = useState(getRequestFactoryContract())


    return (
        <div className="farmer">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://banner2.cleanpng.com/20181026/jhj/kisspng-bitcoin-cryptocurrency-blockchain-digital-currency-bitcoin-supinfo-cole-suprieure-dampaposinf-5bd2a96f136079.5840313015405325910794.jpg"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
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