import React from "react";
import CustomButton from "./custom-button.js";
//import css file for styling

function AboutUs() {
  return (
    <div class="aboutUs">
      <p>
        In this website, you are able to track your calorie intakes from your
        daily diets. We will then provide you with meal suggestions according to
        your recommended target calories! Before all that, please allow us to
        get to know you a little better by answering our short Survey. Cheers!!
      </p>
      <br />
      <CustomButton txt="SURVEY PAGE" />
    </div>
  );
}

export default AboutUs;
