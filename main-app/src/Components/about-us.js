import React from "react";
import CustomButton from "./custom-button.js";
import "../Stylesheet/about-us.module.css";
//import css file for styling

function AboutUs() {
  return (
    <div>
      <p className="aboutUs">
        In this website, you are able to track your calorie intakes from your
        daily diets. We will then provide you with meal suggestions according to
        your recommended target calories! Before all that, please allow us to
        get to know you a little better by answering our short Survey. Cheers!!
      </p>
      <p>
        <CustomButton txt="SURVEY PAGE"/>
      </p>
      <br />
    </div>
  );
}

export default AboutUs;
