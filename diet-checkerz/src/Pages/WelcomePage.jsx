import {
  createMuiTheme,
  ThemeProvider,
  //makeStyles,
} from "@material-ui/core/styles";
import "../Stylesheet/welcome-page.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import NavBar from "../Components/NavBar";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";

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
          <Switch>
            <Route exact path="/">
              <NavBar />
              <AboutUs />
            </Route>
            <Route path="/main">
              <NavBar />
              <MainPage />
            </Route>
            <Route path="/contact">
              <NavBar />
              <ContactUs />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default WelcomePage;
