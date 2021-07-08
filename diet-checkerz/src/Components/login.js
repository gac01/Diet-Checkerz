import { useRadioGroup } from "@material-ui/core";
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
    }
  };

  signup = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log("password: " + password);
    try {
      const { user } = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(user);
      const userData = { user, ...this.state };
      await createUserDocument(userData);
    } catch (err) {
      console.log("error", err);
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
          <h3>What's your name?</h3>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Jack"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <h3>What is your email?</h3>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <h3>Password: </h3>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="enter password"
            value={this.state.password}
          />
          <h3>What is your gender?</h3>
          <input
            type="radio"
            name="gender"
            id="male"
            class="input-hidden"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === "male"}
          />
          <label for="male">
            <img src="../assets/Male Icon.jpeg" alt="MALE👨" />
          </label>
          <input
            type="radio"
            name="gender"
            id="female"
            class="input-hidden"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === "female"}
          />
          <label for="female">
            <img src="../assets/Female Icon.jpeg" alt="FEMALE🙎‍" />
          </label>
          <h3> What's your age? </h3>
          <input
            type="number"
            name="age"
            min="0"
            max="150"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <h3>What's your weight? (in kilograms)</h3>
          <p>
            My Weight is:
            <input
              type="number"
              name="weight"
              min="0"
              max="500"
              onChange={this.handleChange}
              value={this.state.weight}
            />
          </p>
          <h3>What is your height? (in Centimetres)</h3>
          <p>
            My Height is:
            <input
              type="number"
              name="height"
              min="0"
              max="300"
              onChange={this.handleChange}
              value={this.state.height}
            />{" "}
            cm
          </p>
          <h3>Which best describes your goal?</h3>
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
            <img src="../assets/Lose Weight.jpg" alt="Lose" />
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
            <img src="../assets/Maintain Weight.jpeg" alt="Maintain" />
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
          <h3>Which best describes your body type?</h3>
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
              src="../assets/Ectomorph.jpg"
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
            <img src="../assets/Mesomorph.jpg" alt={BODYTYPE.MESOMORPH} />
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
            <img src="../assets/Endomorph.jpg" alt={BODYTYPE.ENDOMORPH} />
          </label>
          <label for="Gain Weight">
            <img src="../assets/Gain Weight.jpg" alt="Gain" />
          </label>
          <h3>How many hours of sleep do you get daily?</h3>
          <input
            type="number"
            name="sleeptime"
            min="0"
            max="24"
            onChange={this.handleChange}
            value={this.state.sleeptime}
          />
          <h3>
            How much time will you allow yourself to reach this fitness goal?
          </h3>
          <p>
            <input
              type="number"
              name="goaltime"
              min="0"
              max="1000"
              onChange={this.handleChange}
              value={this.state.goaltime}
            />{" "}
            weeks
          </p>
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;
