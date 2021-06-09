import React from 'react';

function ReturnAmt() {
    return (
        <div classname="returnamount">

            <form>
                <div class="form group">
                    <div class="container">
                        <div class="row align-items-center my-5">
                            <div class="col-lg-7">
                                <label for="wallet">Enter the farmer's address</label>
                                <input type="text" class="form-control" id="walletaddress" aria-describedby="address" placeholder="Enter address" />
                            </div>
                            <div class="col-lg-7">
                                <label for="amt">Enter the return amount</label>
                                <input type="text" class="form-control" id="returnamtt" aria-describedby="amt" placeholder="Enter amount" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ReturnAmt;