import React from "react";

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://images.indianexpress.com/2020/05/farmers-759.jpg?w=600"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Home</h1>
                        <p>
                            A decentralized app to invest in farmers!
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;