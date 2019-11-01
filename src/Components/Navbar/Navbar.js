import React from "react";
import "./Navbar.css";
import logo from "./SiVAwhite.png";
import Button from 'react-bootstrap/Button';
class Navbar extends React.Component {
  state = {
    auth: false
  }
  render() {
    const isAuth = this.state.auth;

    return (
      <div className="div">
        {isAuth ? (
          <nav className="navbar navstyle fixed-top navbar-dark">
            <img alt="logo" className="logomarhnos" src={logo} />
            <Button variant="primary" size="sm" className="mr-auto button-cont">Contacto</Button>
            <h1 className="user-info">Username@correo.com <Button variant="danger" size="sm" className="button-logout">Cerrar Sesión</Button></h1>
          </nav>
        ) : (
            <nav className="navbar navbar-expand-lg  navstyle fixed-top navbar-dark">
              <img alt="logo" className="logomarhnos" src={logo} />
            </nav>
          )}
      </div>
    );
  }
}
export default Navbar;
