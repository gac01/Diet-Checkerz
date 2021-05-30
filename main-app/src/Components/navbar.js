import React from "react";
import CustomButton from "./custom-button.js";
import logo from "../assets/logo.jpg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#fff",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "15%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});

function NavBar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <img src={logo} className={classes.logo} />
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/main">HOME</Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/">ABOUT US</Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="../signup">SIGN IN</Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        CONTACT US
      </Typography>
      <CustomButton txt="SIGN UP" />
    </Toolbar>
  );
}

export default NavBar;
