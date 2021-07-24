import React from "react";
import "../Stylesheet/navbar.module.css";
import { Nav, NavLink, Bars, NavMenu } from "./navbar-styling";
import { fire } from "../utils/fire";

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img
            src="https://i.imgur.com/wDzz5ij.png"
            alt="Logo"
            width="200px"
            height="300px"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/main">Home</NavLink>
          <NavLink exact to="/">
            About Us
          </NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <button
            onClick={() => {
              fire.auth().signOut();
            }}
          >
            Sign Out
          </button>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;
