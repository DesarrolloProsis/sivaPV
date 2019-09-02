import React from "react";
import { Switch, Route, Redirect
 } from "react-router-dom";
import Login from "../Views/Login";
import Protected from "./Protected";

class Main extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Login}></Route>
          {/* Ruta protegida */}
          <Route exact path="/inicio" component={Protected}></Route>
          <Route exact path="/modulo" component={Protected} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
  }
}

export default Main;