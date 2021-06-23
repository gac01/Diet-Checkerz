import React from "react";
//import CustomButton from "../Components/custom-button.js";

function SurveyPage() {
  return (
    <div class="survey">
      <div id="question_one">
        <form>
          <h3>What is your gender?</h3>
          <div class="gender-options">
            <input type="radio" name="gender" id="male" class="input-hidden" />
            <label for="male">
              <img src="../assets/Male Icon.jpeg" alt="MALE👨" />
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              class="input-hidden"
            />
            <label for="female">
              <img src="../assets/Female Icon.jpeg" alt="FEMALE🙎‍" />
            </label>
          </div>
          <br />
        </form>
      </div>

      <div id="question_two">
        <form>
          <h3>What is your age?</h3>

          <div class="age">
            <input type="number" name="age-answer" min="0" max="150" />
          </div>
          <br />
        </form>
      </div>

      <div id="question_three">
        <form id="form">
          <h3>What is your weight? (in Kilograms)</h3>
          <div class="weight">
            <p>
              My Weight is:
              <input type="number" name="weight-answer" min="0" max="500" />
            </p>
          </div>
        </form>
      </div>

      <div id="question_four">
        <form id="form">
          <h3>What is your height? (in Centimetres)</h3>
          <div class="height">
            <p>
              {" "}
              My Height is:{" "}
              <input type="number" name="height-answer" min="0" max="300" /> cm
            </p>
          </div>
        </form>
      </div>

      <div id="question_five">
        <form id="form">
          <h3>Which best describes your goal?</h3>

          <div class="goal-options">
            <input
              name="goal_option"
              id="Lose Weight"
              type="radio"
              value="Lose"
              class="input-hidden"
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
            />
            <label for="Gain Weight">
              <img src="../assets/Gain Weight.jpg" alt="Gain" />
            </label>
          </div>
        </form>
      </div>

      <div id="question_six">
        <form id="form">
          <h3>Which best describes your body type?</h3>

          <div class="body-types">
            <input
              id="Ectomorph"
              name="body_type"
              class="input-hidden"
              type="radio"
              value="Ectomorph"
            />
            <label for="Ectomorph">
              <img
                src="../assets/Ectomorph.jpg"
                alt="Ectomorph"
                width="100px"
              />
            </label>

            <input
              id="Mesomorph"
              name="body_type"
              class="input-hidden"
              type="radio"
              value="Mesomorph"
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
            />
            <label for="Endomorph">
              <img src="../assets/Endomorph.jpg" alt="Endomorph" />
            </label>
          </div>
        </form>
      </div>

      <div id="question_seven">
        <form id="form">
          <h3>How many hours of sleep do you get daily?</h3>

          <div class="sleep">
            <input type="number" name="sleep_amount" min="0" max="24" />
          </div>
        </form>
      </div>

      <div id="question_eight">
        <form id="form">
          <h3>
            How much time will you allow yourself to reach this fitness goal?
          </h3>
          <div class="time">
            <p>
              <input type="number" name="time" min="0" max="1000" /> weeks
            </p>
          </div>
        </form>
      </div>

      <div id="question_nine">
        <form>
          <h3>What is your name?</h3>

          <div class="username">
            <p>
              <input type="text" name="username" />
            </p>
          </div>
        </form>
      </div>

      <div id="question_ten">
        <form>
          <h3>What is your email address?</h3>

          <div class="email">
            <p>
              <input type="text" name="email" />
            </p>
          </div>
        </form>
      </div>

      <div>
        <customButton txt="SUBMIT" />
      </div>
    </div>
  );
}

export default SurveyPage;