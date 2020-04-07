import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Component/Auth/Login/index";
import Signup from "./Component/Auth/Signup/index";
import Profile from './Component/CommonComponent/Profile/index';

import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
