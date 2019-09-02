import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Inicio from "../Views/Inicio";
import Modulo from "../Views/Modulo";
class Protected extends React.Component {
    state = {
        auth: true
    }
    render() {
        return (
            <Switch>
                <Route path="/inicio" render={() => (this.state.auth ? (<Inicio />) : (<Redirect to="/" />))} />
                <Route path="/modulo" render={() => (this.state.auth ? (<Modulo />) : (<Redirect to="/" />))} />
            </Switch>


        )
    }
}
export default Protected;