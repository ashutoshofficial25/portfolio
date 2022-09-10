import React from "react";
import heroImg from "../hero-image.svg";
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";

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
            <h2 className="hero-title">I’m a creative web developer . . .</h2>
            <p>Commited to People, Commited to the Future.</p>

            <button className="hero-btn">View my work</button>
          </div>

          <img src={heroImg} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
