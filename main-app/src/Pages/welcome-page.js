import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import "../Stylesheet/welcome-page.css";

import NavBar from "../Components/navbar";
import Home from "../Components/home.js";
import AboutUs from "../Components/about-us.js";

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
        <AboutUs />
      </ThemeProvider>
    </div>
  );
}

export default WelcomePage;
