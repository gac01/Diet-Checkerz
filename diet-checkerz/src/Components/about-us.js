import React from "react";
import "../Stylesheet/about-us.module.scss";
import ScriptTag from 'react-script-tag';

function AboutUs() {
  return (
    <div>
      <section>
        <div id="bg-text"><p>WELCOME TO DIET-CHECKERZ</p></div>
      </section>

      <section className="sticky">
        <blockquote>"You will be able to track your daily calorie intake in this website,
        and we will provide you with your recommended calorie intake according 
        to your goals."<span></span>
        </blockquote>

        <img id="office" src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1620,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/nckccy83erwtt2miycob/FitnessClassesinDowntownCoreSingapore.webp" />
        <img id="building" src="https://online.ahu.edu/wp-content/uploads/2019/03/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg" />
        <div id="box"></div>
      </section>

      <section>
        <p>Fill in the Survey!</p>
      </section>
    </div>
  );
}

export default AboutUs;