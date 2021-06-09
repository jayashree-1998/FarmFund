import React from "react";

function Creation()
{
    return(
        <div classname="create">
            <form>
                <div class="form group">
                    <div class="container">
                        <div class="row align-items-center my-5">
                            <div class="col-lg</div>-7">
                                <div class="form-group row">
                                    <label for="Title" class="col-sm-2 col-form-label">Title</label>
                                    <input type="text" class="form-control" id="Title" placeholder="Enter the title" />
                                </div>
                                <div class="form-group row">
                                    <label for="Amount" class="col-sm-2 col-form-label">Amount</label>
                                    <input type="text" class="form-control" id="Amount" placeholder="Amount in GWEI" />
                                </div>
                                <div class="form-group row">
                                    <label for="Days" class="col-sm-2 col-form-label">Days</label>
                                    <input type="text" class="form-control" id="Days" placeholder="Number of Days" />
                                </div>
                                <div class="form-group row">
                                    <label for="inputAddres" class="col-sm-2 col-form-label">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Wallet Address"/>   
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            </div>
                    </div>
                </div>
            </form>
          
        </div>

    )
}

export default Creation;