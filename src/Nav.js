import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import React, { useState } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom"; // Import the Link component

function NewComponent(props) {
  // const [isActive, setActive] = useState("false");

  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };
  return (
    <div className="menu">
      <Navbar bg="dark" variant="dark" expand="lg">
        {/* <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo-image" alt="Logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About me
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
          <a className="navbar-brand" href="/">
            <img src={logo} className="img-fluid logo-image" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            onClick={ToggleClass}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              isActive
                ? "collapse navbar-collapse "
                : "collapse navbar-collapse show"
            }
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="item nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/projects" className="item nav-link">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="item nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav> */}
    </div>
  );
}

export default NewComponent;
