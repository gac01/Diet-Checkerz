import { useRadioGroup } from "@material-ui/core";
import React, { Component } from "react";
import { fire, createUserDocument } from "../Config/fire";
import "../Stylesheet/login.module.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
      gender: "",
      age: "", // in years
      weight: "", // in kilograms
      height: "", // in centimeters
      goal: "",
      bodytype: "",
      sleeptime: "", // in hours, daily
      goaltime: "",
    };
  }
  login = async (event) => {
    event.preventDefault();
    try {
      const { user } = await fire
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      console.log(user);
    } catch (err) {
      console.log("error", err);
    }
  };

  signup = async (event) => {
    event.preventDefault();
    try {
      const { user } = await fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      console.log(user);
      await createUserDocument(
        user,
        this.state.name,
        this.state.gender,
        this.state.age,
        this.state.weight,
        this.state.height,
        this.state.goal,
        this.state.bodytype,
        this.state.sleeptime,
        this.state.goaltime
      );
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
            value={this.state.name}
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
            name="age-answer"
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
              name="weight-answer"
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
              name="height-answer"
              min="0"
              max="300"
              onChange={this.handleChange}
              value={this.state.height}
            />{" "}
            cm
          </p>
          <h3>Which best describes your goal?</h3>
          <input
            name="goal_option"
            id="Lose Weight"
            type="radio"
            value="Lose"
            class="input-hidden"
            onChange={this.handleChange}
            checked={this.state.goal === "Lose"}
          />
          <label for="Lose Weight">
            <img src="../assets/Lose Weight.jpg" alt="Lose" />
          </label>
          <input
            name="goal_option"
            id="Maintain Weight"
            type="radio"
            value="Maintain"
            class="input-hidden"
            onChange={this.handleChange}
            checked={this.state.goal === "Maintain"}
          />
          <label for="Maintain Weight">
            <img src="../assets/Maintain Weight.jpeg" alt="Maintain" />
          </label>
          <input
            name="goal_option"
            id="Gain Weight"
            type="radio"
            value="Gain"
            class="input-hidden"
            onChange={this.handleChange}
            checked={this.state.goal === "Gain"}
          />
          <h3>Which best describes your body type?</h3>
          <input
            id="Ectomorph"
            name="body_type"
            class="input-hidden"
            type="radio"
            value="Ectomorph"
            onChange={this.handleChange}
            checked={this.state.bodytype === "Ectomorph"}
          />
          <label for="Ectomorph">
            <img src="../assets/Ectomorph.jpg" alt="Ectomorph" width="100px" />
          </label>

          <input
            id="Mesomorph"
            name="body_type"
            class="input-hidden"
            type="radio"
            value="Mesomorph"
            onChange={this.handleChange}
            checked={this.state.bodytype === "Mesomorph"}
          />
          <label for="Mesomorph">
            <img src="../assets/Mesomorph.jpg" alt="Mesomorph" />
          </label>

          <input
            id="Endomorph"
            name="body_type"
            class="input-hidden"
            type="radio"
            value="Endomorph"
            onChange={this.handleChange}
            checked={this.state.bodytype === "Endomorph"}
          />
          <label for="Endomorph">
            <img src="../assets/Endomorph.jpg" alt="Endomorph" />
          </label>
          <label for="Gain Weight">
            <img src="../assets/Gain Weight.jpg" alt="Gain" />
          </label>
          <h3>How many hours of sleep do you get daily?</h3>
          <input
            type="number"
            name="sleep_amount"
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
              name="time"
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
