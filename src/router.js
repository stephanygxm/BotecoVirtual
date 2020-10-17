import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import List from "./Components/List/lista";
import Card from "./Components/Card/card";

import Somos from "./Components/Somos/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/lista" component={List} />
      <Route path="/card:id" component={Card} />
      <Route path="/somos" component={Somos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
