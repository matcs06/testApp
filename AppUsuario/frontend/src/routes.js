import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Container } from './styles';

import Login from "./Screens/Login/index";
import Message from "./Screens/Message/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/message" component={Message} />
      </Switch>
    </BrowserRouter>
  );
}
