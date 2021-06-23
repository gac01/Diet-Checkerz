import React from "react";
import CustomButton from "./custom-button.js";
//import logo from "../assets/logo.jpg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#006400",
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "15%",
    // eslint-disable-next-line
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    // eslint-disable-next-line
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
      // eslint-disable-next-line
      className={classes.bar}
    >
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/main">
          <CustomButton txt="HOME" />
        </Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/">
          <CustomButton txt="ABOUT US" />
        </Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="../signup">
          <CustomButton txt="SIGN UP" />
        </Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/">
          <CustomButton txt="CONTACT US" />
        </Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/">
          <CustomButton txt="SIGN IN" />
        </Link>
      </Typography>
    </Toolbar>
  );
}

export default NavBar;