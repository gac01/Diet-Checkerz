import React, { Component } from "react";
import { fire, createUserDocument } from "../utils/fire";
import { BODYTYPE, GOAL } from "../utils/constants";
import "../Stylesheet/login.module.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  gender: "",
  age: 0, // in years
  weight: 0, // in kilograms
  height: 0, // in centimeters
  goal: "",
  bodytype: "",
  sleeptime: 0, // in hours, daily
  goaltime: 0, // in weeks
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = initialState;
  }

  login = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const { user } = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (err) {
      console.log("error", err);
      alert("Invalid credentials");
    }
  };

  signup = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const { user } = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
      const userData = { user, ...this.state };
      await createUserDocument(userData);
    } catch (err) {
      console.log("error", err);
      alert("Invalid field values");
    }
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <h2>What is your name?</h2>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Name..."
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br />
          <br />
          <br />
          <h2>Email Address:</h2>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address..."
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <br />
          <br />
          <h2>Password:</h2>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="Enter Your Password..."
            value={this.state.password}
          />
          <br />
          <br />
          <br />
          <h2>What is your gender?</h2>
          <input
            type="radio"
            name="gender"
            id="male"
            className="input-hidden"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === "male"}
          />
          <label for="male">
            <img
              src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
              alt="MALE👨"
            />
          </label>
          <input
            type="radio"
            name="gender"
            id="female"
            className="input-hidden"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === "female"}
          />
          <label for="female">
            <img
              src="https://img.pngio.com/social-user-woman-avatar-profile-icon-female-profile-png-512_512.png"
              alt="FEMALE🙎‍"
            />
          </label>
          <br />
          <br />
          <br />
          <h2> What's your age? </h2>
          <input
            type="number"
            name="age"
            min="0"
            max="150"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <br />
          <br />
          <br />
          <h2>What is your weight? (in Kilograms)</h2>
          <div>
            <input
              type="number"
              name="weight"
              min="0"
              max="500"
              onChange={this.handleChange}
              value={this.state.weight}
            />
          </div>
          <br />
          <br />
          <br />
          <h2>What is your height? (in Centimetres)</h2>
          <div>
            <input
              type="number"
              name="height"
              min="0"
              max="300"
              onChange={this.handleChange}
              value={this.state.height}
            />{" "}
          </div>
          <br />
          <br />
          <br />
          <h2>Which image best describes your goal?</h2>
          <input
            name="goal"
            id="Lose Weight"
            type="radio"
            value={GOAL.LOSE}
            className="input-hidden "
            onChange={this.handleChange}
            checked={this.state.goal === GOAL.LOSE}
          />
          <label for="Lose Weight">
            <img
              src="https://static.thenounproject.com/png/2334704-200.png"
              alt="Lose"
            />
          </label>
          <input
            name="goal"
            id="Maintain Weight"
            type="radio"
            value={GOAL.MAINTAIN}
            className="input-hidden"
            onChange={this.handleChange}
            checked={this.state.goal === GOAL.MAINTAIN}
          />
          <label for="Maintain Weight">
            <img
              src="https://cdn0.iconfinder.com/data/icons/gym-outline-2/64/weight-512.png"
              alt="Maintain"
            />
          </label>
          <input
            name="goal"
            id="Gain Weight"
            type="radio"
            value={GOAL.GAIN}
            className="input-hidden"
            onChange={this.handleChange}
            checked={this.state.goal === GOAL.GAIN}
          />
          <label for="Gain Weight">
            <img
              src="https://static.thenounproject.com/png/2476006-200.png"
              alt="Gain"
            />
          </label>
          <br />
          <br />
          <br />
          <h2>Which best describes your body type?</h2>
          <input
            id="Ectomorph"
            name="bodytype"
            className="input-hidden"
            type="radio"
            value={BODYTYPE.ECTOMORPH}
            onChange={this.handleChange}
            checked={this.state.bodytype === BODYTYPE.ECTOMORPH}
          />
          <label for="Ectomorph">
            <img
              src="https://cdn1.iconfinder.com/data/icons/fitness-healthy-living-wildberry-vol-1/256/Ectomorph-512.png"
              alt={BODYTYPE.ECTOMORPH}
              width="100px"
            />
          </label>

          <input
            id="Mesomorph"
            name="bodytype"
            className="input-hidden"
            type="radio"
            value={BODYTYPE.MESOMORPH}
            onChange={this.handleChange}
            checked={this.state.bodytype === BODYTYPE.MESOMORPH}
          />
          <label for="Mesomorph">
            <img
              src="https://cdn1.iconfinder.com/data/icons/fitness-healthy-living-wildberry-vol-2/256/Mesomorph-512.png"
              alt={BODYTYPE.MESOMORPH}
            />
          </label>

          <input
            id="Endomorph"
            name="bodytype"
            className="input-hidden"
            type="radio"
            value={BODYTYPE.ENDOMORPH}
            onChange={this.handleChange}
            checked={this.state.bodytype === BODYTYPE.ENDOMORPH}
          />
          <label for="Endomorph">
            <img
              src="https://cdn1.iconfinder.com/data/icons/fitness-healthy-living-wildberry-vol-1/256/Endomorph-512.png"
              alt={BODYTYPE.ENDOMORPH}
            />
          </label>
          <br />
          <br />
          <br />
          <h2>How many hours of sleep do you get daily?</h2>
          <input
            type="number"
            name="sleeptime"
            min="0"
            max="24"
            onChange={this.handleChange}
            value={this.state.sleeptime}
          />
          <br />
          <br />
          <br />
          <h2>
            How much time will you allow yourself to reach this fitness goal?
            (in Weeks)
          </h2>
          <div>
            <input
              type="number"
              name="goaltime"
              min="0"
              max="1000"
              onChange={this.handleChange}
              value={this.state.goaltime}
            />{" "}
          </div>
          <br />
          <br />
          <br />
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </form>
        <br />
      </div>
    );
  }
}

export default Login;
