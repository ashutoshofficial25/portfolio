import React, { useState } from "react";
import logo from "../logo.png";
import naviIcon from "../assets/nav-icon.png";
import { Dropdown, NavDropdown, Offcanvas } from "react-bootstrap";

const TopNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <li className="nav-item">Home</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">About me</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Contact me</li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
