import React from "react";
import { Route, Redirect } from "react-router-dom";
import Inicio from "../Views/Inicio";
class Protected extends React.Component {
    state = {
        auth: false
    }
    render() {
        return (
            <Route render={() => (this.state.auth ? (<Inicio />) : (<Redirect to="/" />))} />
        )
    }
}
export default Protected;