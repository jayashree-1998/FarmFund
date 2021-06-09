import React from 'react';

function GovVerify() {
    return (
        <div classname="goverify">

            <form>
                <div class="form group">
                    <div class="container">
                        <div class="row align-items-center my-5">
                            <div class="col-lg-7">
                                <label for="wallet">Enter the farmer's address</label>
                                <input type="text" class="form-control" id="walletaddress" aria-describedby="address" placeholder="Enter address" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Verify</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default GovVerify;