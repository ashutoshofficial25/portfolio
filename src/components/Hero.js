import React from "react";
import heroImg from "../hero-image.svg";

import downloadIcon from "../assets/direct-download.png";

const Hero = () => {
  // window.onscroll = function () {
  //   myFunction();
  // };

  // let header = document.getElementById("top-nav");
  // let sticky = header.offsetTop + 100;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("top-nav-bg");
  //   } else {
  //     header.classList.remove("top-nav-bg");
  //   }
  // }

  return (
    <div className="main-container">
      <div className="hero-section">
        <div id="hero" className="hero">
          <div className="hero-text">
            <h2 className="hero-title">I’m a creative web developer </h2>
            <p> </p>
            <p className="hero-description">
              I'm a web developer with a focus on the MERN stack, but still
              exploring other technologies and frameworks that catch my
              interest! if you're looking for a developer to add to your team,
              I'd love to hear from you!
            </p>
            <div className="hero-btn-group">
              <button className="hero-btn resume">
                {" "}
                <img
                  className="download-icon"
                  src={downloadIcon}
                  alt="download-icon"
                />{" "}
                &nbsp; My CV
              </button>
              <button className="hero-btn wrk-btn">View my work</button>
            </div>
          </div>

          <img src={heroImg} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
