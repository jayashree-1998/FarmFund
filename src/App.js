import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Farmer, Footer, Home, Investor, Government, Display, Verification, Creation, Finalization, GovVerify, ReturnAmt, Pay} from "./components";
import 'bootstrap-css-only/css/bootstrap.min.css';
import {initWeb3} from './ethereum/utils'

function App() {
  initWeb3()
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/farmer">
            <Farmer />
          </Route>
          <Route path="/invest">
            <Investor />
          </Route>
          <Route path="/gov">
            <Government />
          </Route>
          <Route path="/verify">
            <Verification />
          </Route>
          <Route path="/create">
            <Creation />
          </Route>
          <Route path="/finalize">
            <Finalization />
          </Route>
          <Route path="/goverify">
            <GovVerify />
          </Route>
          <Route path="/returnamount">
            <ReturnAmt />
          </Route>
          <Route path="/payamt">
            <Pay />
          </Route>
          <Route path="/displayrequests">
            <Display />
          </Route>
        <Route path="/">
          <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;