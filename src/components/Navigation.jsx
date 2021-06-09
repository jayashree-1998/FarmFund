import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        FarmFund
          </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${props.location.pathname === "/farmer" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/farmer">
                                    Farmer
                  <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/invest" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/invest">
                                    Investor
                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/gov" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/gov">
                                    Government
                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);