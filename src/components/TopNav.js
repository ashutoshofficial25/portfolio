import React from "react";
import heroImg from "../hero-image.svg";
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";
import downloadIcon from "../assets/direct-download.png";
import { Dropdown, NavDropdown } from "react-bootstrap";

const TopNav = () => {
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
        <header className="top-nav top-nav-bg">
          <img className="logo" src={logo} alt="logo-img" />
          {/* <div className="logo">logo</div> */}
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">About me</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact me</li>
          </ul>
          <div className="nav-option-icon">
            <NavDropdown
              id="nav-dropdown"
              title={<img src={naviIcon} />}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#hero">Home</NavDropdown.Item>

              <NavDropdown.Item href="#services">Services</NavDropdown.Item>

              <NavDropdown.Item href="#about-me">About me</NavDropdown.Item>
              <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#contact-me">Contact me</NavDropdown.Item>
            </NavDropdown>
          </div>
        </header>
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

export default TopNav;
