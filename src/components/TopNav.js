import React, { useState } from "react";

//Package Import
import { NavLink, Offcanvas } from "react-bootstrap";

//Assets Import
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";

const TopNav = () => {
  const [show, setShow] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <header
        id="top-nav"
        className={colorChange ? "top-nav top-nav-bg" : "top-nav"}
      >
        <img className="logo" src={logo} alt="logo-img" />
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink href="#home"> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#services"> Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#about-me">About me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#contact-me">Contact me</NavLink>
          </li>
        </ul>
        <div className="nav-option-icon">
          <img
            className={colorChange ? "" : "nav-option"}
            onClick={handleShow}
            src={naviIcon}
            alt="nav-bar-line"
          />

          <Offcanvas
            show={show}
            placement="end"
            onHide={handleClose}
            style={{ width: "200px" }}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className="d-flex align-items-center">
              <ul className="nav-list-hidden">
                <li className="nav-item">
                  <a href="#home"> Home</a>
                </li>
                <li className="nav-item">
                  <NavLink href="#services"> Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#about-me">About me</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#projects">Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="#contact-me">Contact me</NavLink>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
