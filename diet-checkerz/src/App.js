import logo from './logo.svg';
import NavBar from './Components/navbar';
import Home from './Components/home';
import AboutUs from './Components/about-us';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
