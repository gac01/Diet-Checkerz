import React from "react";
import "../Stylesheet/navbar.module.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbar-styling";
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
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Contact Us</NavLink>
          <button
            onClick={() => {
              fire.auth().signOut();
            }}
          ></button>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default NavBar;
