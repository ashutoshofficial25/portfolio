import React from "react";
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";
import { Dropdown, NavDropdown } from "react-bootstrap";

const TopNav = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default TopNav;
