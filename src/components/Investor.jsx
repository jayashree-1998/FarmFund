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
                            src="https://png2.cleanpng.com/sh/2028247ba64d06be4a5b28ebc23bd6fc/L0KzQYm3V8AzN6l4iJH0aYP2gLBuTfZtgZpzf59sYYPrPcb1igRmbF54jNN9ZYOwdLFzjPFzNZNmht13b4ToPbT8kwJmdpRARdR4bnewdLK0VfI0QZIAeasDZnK3QIG1VsUxP2I6TKk6NUOzRYG8VsQyPWk9TpD5bne=/kisspng-flying-cash-united-states-dollar-banknote-currency-bong-da-5b39a9a98fb400.6507154715305056415886.png"
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