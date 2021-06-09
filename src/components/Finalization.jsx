import React from "react";
import { Button } from "react-bootstrap";

function Finalization()
{
    return(
        <div classname="finalize">
        <form>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                            <div class="form-group row">
                                <label for="inputAddres" class="col-sm-2 col-form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Wallet Address" />
                            </div>
                            <button onClick={this.onFinalize} type="submit" class="btn btn-primary">Submit</button>
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
                    <p>Would you like to finalize your request?</p>
                    <Button variant="primary">Finalize</Button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Finalization;