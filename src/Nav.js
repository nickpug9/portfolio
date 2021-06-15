import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component

function NewComponent(props) {
  // const [isActive, setActive] = useState("false");

  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };
  // const navLinks = document.querySelectorAll(".nav-item");
  const [isActive, setActive] = useState("false");

  const toggleNav = (e) => {
    setActive(!isActive);
  };

  return (
    <div className="menu">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/nickpug/image/upload/q_70/v1623780447/Personal/favicon.ico_srexgv.png"
            className="img-fluid logo-image"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNav} aria-controls="basic-navbar-nav" />
        <Navbar
          className={
            isActive
              ? "app-nav navbar-collapse collapse"
              : "app-nav navbar-collapse collapse show"
          }
        >
          <Nav className="app-nav">
            <Link to="/" onClick={toggleNav} className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" onClick={toggleNav} className="nav-item nav-link">
              About me
            </Link>
            <Link
              to="/projects"
              onClick={toggleNav}
              className="nav-item nav-link"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              onClick={toggleNav}
              className="nav-item nav-link"
            >
              Resume
            </Link>
          </Nav>
        </Navbar>
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
