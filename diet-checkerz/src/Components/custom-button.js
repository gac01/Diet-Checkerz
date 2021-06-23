import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: 0,
    background: "#FFF5EE",
    color: "#000000",
    transform: "none",
    //boxShadow: "6px 6px 0 0 #c7d8ed",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
      backgroundColor: "#FFF5EE",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function CustomButton(props) {
  return <StyledButton variant="contained">{props.txt}</StyledButton>;
}

export default CustomButton;