import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
// import store from "../Redux/store";
import axios from "axios";
class Login extends React.Component {
  state = {
    user: "",
    pass: "",
    token: "",
    error:false
  }
  handleChangeUser = (event) => {
    this.setState({ user: event.target.value });
  }
  handleChangePass = (event) => {
    this.setState({ pass: event.target.value });
  }
  logIn = () => {
    var data = {
      "email": this.state.user,
      "password": this.state.pass
    }

    
    // var axiosconfig = {
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
    //      "Access-Control-Allow-Headers":"Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
    //   }
    // }
 
    axios.post("http://192.168.0.71:8081/api/auth/login", data)
      .then((res) => {
        this.setState({
          token: res.data.token,
          numCliente:res.data

        })
        const cookies = new Cookies();
        cookies.set('token',this.state.token);
        this.props.history.push("/inicio");
      })
      .catch((err) => {
        console.log("REQUEST ERROR: ", err);
        this.setState({
          error:true
        })
      });
    }

  render() {
    const errorMessage = () =>{
      
      if (this.state.error === true) {
        return(
          <h4 Style="color:red; font-size:15px;">Credenciales no validas, revisa que tus datos sean correctos. </h4>
        )
       
      }
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image" />
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5 row-back">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">¡Bienvenido!</h3>
                      {
                        this.state.user + " " + this.state.pass
                      }
                      <form>
                      {errorMessage()}
                        <div className="form-label-group ">
                          <input autoComplete="new-email" type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleChangeUser} autoFocus />
                          <label htmlFor="inputEmail" className="">Correo Electrónico</label>
                        </div>
                        <div className="form-label-group">
                          <input  autoComplete="new-password" type="password" id="inputPassword" className="form-control form-space" placeholder="Password" onChange={this.handleChangePass} />
                          <label htmlFor="inputPassword">Contraseña</label>
                        </div>
                        <p onClick={this.logIn} className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2 botoninicio-verde" >iniciar</p>
                        <Link to="/register">
                          <p>¿Eres nuevo? Resgístrate aquí</p>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    results: state.results
  }
};
export default connect(mapStateToProps)(Login);
