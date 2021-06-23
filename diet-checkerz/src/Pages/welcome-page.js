import {
    createMuiTheme,
    ThemeProvider,
    //makeStyles,
  } from "@material-ui/core/styles";
  import "../Stylesheet/welcome-page.css";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  
  import NavBar from "../Components/navbar";
  import Home from "../Components/home.js";
  import AboutUs from "../Components/about-us.js";
  import SurveyPage from "./signup-page";
  import MainPage from "./main-page";
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2e1667",
      },
      secondary: {
        main: "#c7d8ed",
      },
    },
    typography: {
      fontFamily: ["Roboto"],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: "2rem",
      },
      h5: {
        fontWeight: 100,
        lineHeight: "2rem",
      },
    },
  });
  
  function WelcomePage() {
    return (
      <Router>
        <div className="App">
          <ThemeProvider theme={theme}>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
                <AboutUs />
              </Route>
              <Route path="/signup">
                <SurveyPage />
              </Route>
              <Route path="/main">
                <MainPage />
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    );
  }
  
  export default WelcomePage;