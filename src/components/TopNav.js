import React from "react";
import heroImg from "../hero-image.svg";
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";
import downloadIcon from "../assets/direct-download.png";

const TopNav = () => {
  return (
    <div className="main-container">
      <div className="hero-section">
        <header className="top-nav">
          <img className="logo" src={logo} alt="logo-img" />
          {/* <div className="logo">logo</div> */}
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">About us</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact us</li>
          </ul>
          <div className="nav-option-icon">
            {" "}
            <img src={naviIcon} />{" "}
          </div>
        </header>
        <div className="hero">
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

export default TopNav;
