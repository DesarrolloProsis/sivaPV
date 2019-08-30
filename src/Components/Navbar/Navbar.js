import React from "react";
import "./Navbar.css";
import logo from "./SiVAwhite.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navstyle fixed-top navbar-dark">
      <img alt="logo" className="logomarhnos" src={logo} />
    </nav>
    );
  }
}
export default Navbar;
