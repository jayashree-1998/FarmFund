import React from "react";
import { Button } from "react-bootstrap";

function Pay() {
    return (
        <div classname="payamt">
            <form>
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <div class="form-group row">
                                <label for="inputAddres" class="col-sm-2 col-form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Wallet Address" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <p>Would you like to pay the investors?</p>
                        <Button variant="primary">Pay</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay;