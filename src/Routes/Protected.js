import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Inicio from "../Views/Inicio";
import Modulo from "../Views/Modulo";
import Cookies from 'universal-cookie';
import axios from "axios";
class Protected extends React.Component {
    state = {
       auth:null
    }
    UNSAFE_componentWillMount() {
        const cookieget = new Cookies();
        var data = `"${cookieget.get('token')}"`
        var config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
              }
        } 
        console.log(data)
        axios.post("http://192.168.0.71:8081/api/auth/validateToken",config, data)
            .then(res => {
                if (res) {
                    this.setState({
                        auth: true
                    })
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    auth: false
                })
            })
        // if (cookieget.get('token') !== undefined) {
        //     this.setState({
        //         auth: true
        //     })
        // } else {
        //     this.setState({
        //         auth: false
        //     })
        // }
    }

    render() {
        // const cookieget = new Cookies();
        // var data = `${cookieget.get('token')}`
        // axios.post("192.168.0.71:8081/api/auth/validateToken", data)
        //     .then(res => {
        //         if (res) {
        //             this.setState({
        //                 auth: true
        //             })
        //         }
        //     })
        //     .catch(err => {
        //         this.setState({
        //             auth: false
        //         })
        //     })
   

        return (
            <Switch>
                <Route path="/inicio" render={() => (this.state.auth ? (<Inicio />) : (<Redirect to="/" />))} />
                <Route path="/modulo" render={() => (this.state.auth ? (<Modulo />) : (<Redirect to="/" />))} />
            </Switch>

        )


    }
}
export default Protected;