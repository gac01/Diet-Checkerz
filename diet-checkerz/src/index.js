import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./reportWebVitals.js";
import WelcomePage from "./Pages/welcome-page";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <WelcomePage />
  </StrictMode>,
  document.getElementById("root")
);

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
