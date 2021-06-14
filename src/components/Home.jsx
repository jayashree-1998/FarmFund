import React from "react";

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://www.pinclipart.com/picdir/big/548-5481811_agriculture-clipart-agriculture-background-farming-clipart-png-transparent.png"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">CrowdFunding for Farmers!</h1>
                        <h2 class="font-weight-light">Join today!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;