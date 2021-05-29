import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import { Router, hashHistory as history } from "react-router";

//import routes from "./router.js";
import WelcomePage from "./Pages/welcome-page";
import SurveyPage from "./Pages/signup-page";
import MainPage from "./Pages/main-page";

import "./index.css";

ReactDOM.render(
  //<Router routes={routes} history={history} />,
  <StrictMode>
    <MainPage />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
