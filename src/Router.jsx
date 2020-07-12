import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
// components
import Header from "./components/Header";
// pages
import HomePage from "./pages/HomePage";

const BrowserRouter = props => {
  return (
    <HashRouter history={props.history}>
      <Switch>
        <Route component={Header}/>
      </Switch>
      <Switch>
        <Route path="/" component={HomePage}/>
      </Switch>
    </HashRouter>
  );
};

export default BrowserRouter;
