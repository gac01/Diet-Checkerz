import React, { useRef } from "react";
import "../Stylesheet/about-us.module.scss";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { FaDeviantart } from "react-icons/fa";



const AboutUs = () => {

  const sectionRef = useRef(null);
  
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    })
  };

  intersection && intersection.intersectionRatio < 0.3 ? fadeIn(".sticky") : fadeOut(".sticky");

  return (
    <div>
      <section>
        <div id="bg-text"><p>WELCOME TO DIET-CHECKERZ</p></div>
      </section>

      <section className="sticky">
        <div ref={sectionRef} >
          <blockquote>"You will be able to track your daily calorie intake in this website,
          and we will provide you with your recommended calorie intake according 
          to your goals."<span></span>
          </blockquote>

          <img id="office" src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1620,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/nckccy83erwtt2miycob/FitnessClassesinDowntownCoreSingapore.webp" />
          <img id="building" src="https://online.ahu.edu/wp-content/uploads/2019/03/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg" />
          <div id="box"></div>
        </div>
      </section>

      <section>
        <p>Fill in the Survey!</p>
      </section>
    </div>
  );
}

export default AboutUs;