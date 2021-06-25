import logo from './logo.svg';
import NavBar from './Components/navbar';
import Home from './Components/home';
import AboutUs from './Components/about-us';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
import fire from "../Config/fire";
import MainPage from "../Pages/main-page";
import WelcomePage from './Pages/welcome-page';
import Login from './Components/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user : {}
    }
  }
  
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({user})
      } else{
        this.setState({user : null})
      }
    })
  }

  render() {
    return (
      <div className="Login">
        {this.state.user ? (<WelcomePage/>) : (<Login/>)}
      </div>  
    );
  }
}

export default App;



