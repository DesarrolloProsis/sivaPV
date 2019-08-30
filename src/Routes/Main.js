import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Views/Login";
import Protected from "./Protected";

class Main extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login}></Route>
          {/* Ruta protegida */}
          <Route exact path="/inicio" component={Protected}></Route>
        </Switch>
    )
  }
}

export default Main;