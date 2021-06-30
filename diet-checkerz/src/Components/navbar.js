import React from 'react';
import "../Stylesheet/navbar.module.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbar-styling';

const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src='https://i.imgur.com/wDzz5ij.png' alt='Logo' width='200px' height='300px'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/main" activeStyle>
            Home
          </NavLink>
          <NavLink to="/" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/" activeStyle>
            Contact Us
          </NavLink>
          <NavBtnLink to='../signup'>Take Quiz</NavBtnLink>
        </NavMenu>

        
      </Nav>
    </div>
  )
}

export default NavBar