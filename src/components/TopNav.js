import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";
import { Offcanvas } from "react-bootstrap";

const TopNav = () => {
  const [show, setShow] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 800) {
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
      {" "}
      <header
        id="top-nav"
        className={colorChange ? "top-nav top-nav-bg" : "top-nav"}
      >
        <img className="logo" src={logo} alt="logo-img" />
        {/* <div className="logo">logo</div> */}
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home"> Home</a>
          </li>
          <li className="nav-item">
            <a href="#services"> Services</a>
          </li>
          <li className="nav-item">
            <a href="#about-me">About me</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact-me">Contact me</a>
          </li>
        </ul>
        <div className="nav-option-icon">
          <img onClick={handleShow} src={naviIcon} />

          <Offcanvas
            show={show}
            placement="end"
            className="bg-dark"
            onHide={handleClose}
            style={{ width: "170px" }}
          >
            <Offcanvas.Header closeButton>
              {/*<Offcanvas.Title>Offcanvas</Offcanvas.Title>*/}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="nav-list-hidden">
                <li className="nav-item">
                  <a href="#home"> Home</a>
                </li>
                <li className="nav-item">
                  <a href="#services"> Services</a>
                </li>
                <li className="nav-item">
                  <a href="#about-me">About me</a>
                </li>
                <li className="nav-item">
                  <a href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="#contact-me">Contact me</a>
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
