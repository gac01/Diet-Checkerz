import './App.css';
import WelcomePage from './Pages/welcome-page';
import Login from './Components/login';
import fire from './Config/fire'

class App extends Component{
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



