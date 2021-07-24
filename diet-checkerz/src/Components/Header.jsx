import { useState, useEffect } from "react";
import "../Stylesheet/main-page.css";
import "../Stylesheet/header.module.css";
import { Paper } from "@material-ui/core";
import { fire, db } from "../utils/fire.js";
import { _checkPlugin } from "gsap/gsap-core";

function Header() {
  // Need to update the calories consumed
  /*const TotalCalories =
    Calories.length > 0 ? Calories.reduce((total, num) => total + num) : 0;;
  */
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (fire.auth().currentUser) {
      db.collection(`users`)
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => setUserData(doc.data()));
    }
  });

  const requiredCalories = userData
    ? Math.round(
        (66.47 +
          13.8 * userData.weight +
          5 * userData.height -
          6.78 * userData.age) *
          (1 - userData.sleeptime * 0.0354)
      )
    : 0;

  return (
    <header>
      <h1> Diet-Checkerz </h1>
      {userData && (
        <div style={{ display: "flex", flexFlow: "row nowrap" }}>
          <Paper className="HeaderBox" elevation={3}>
            <div>
              You need <strong>{requiredCalories}</strong> calories to reach
              your daily goal!
            </div>
            <div>
              Currently you have consumed <strong> {0} </strong> calories!
            </div>
          </Paper>
        </div>
      )}
    </header>
  );
}

export default Header;
