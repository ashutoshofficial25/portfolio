import React from "react";

//assets Import
import heroImg from "../assets/hero-image.svg";
import downloadIcon from "../assets/direct-download.png";
import resume from "../assets/Resume/Resume-Ashutosh-Maurya.pdf";
import CustonButton from "./CustonButton";

const Hero = () => {
  return (
    <div id="home" className="main-container">
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
              <CustonButton className="hero-btn resume">
                <a href={resume} download>
                  <img
                    className="download-icon"
                    src={downloadIcon}
                    alt="download-icon"
                  />{" "}
                  &nbsp; My CV
                </a>
              </CustonButton>

              <CustonButton className="hero-btn wrk-btn">
                <a href="#projects"> View my work</a>
              </CustonButton>
            </div>
          </div>

          <img src={heroImg} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
