import { useState } from "react";
import "../Stylesheet/main-page.css";
import "../Stylesheet/header.module.css";
import { Paper } from "@material-ui/core";

function Header(props) {
  // Need to update the calories consumed
  const { Meal, Calories, Date } = props;
  const TotalCalories =
    Calories.length > 0 ? Calories.reduce((total, num) => total + num) : 0;
  return (
    <header>
      <h1> Diet-Checkerz </h1>
      <div style={{ display: "flex", flexFlow: "row nowrap" }}>
        <Paper variant="outlined" class="HeaderBox">
          <p>
            {" "}
            You need <strong> 2000 </strong> calories to reach your daily goal!
          </p>
          <p>
            Currently you have consumed <strong> {TotalCalories} </strong>{" "}
            calories!
          </p>
        </Paper>
        <Paper variant="outlined" class="HeaderBox">
          <p>
            You have had <strong> {Meal.length} </strong> meal
            {Meal.length !== 1 ? "s" : ""} today!
          </p>
        </Paper>
      </div>
    </header>
  );
}

export default Header;
