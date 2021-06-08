import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function NewComponent(props) {
  return (
    <div className="home row mx-0">
      <motion.div
        animate={{ x: "120vw", y: 200, rotate: 360 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 24 }}
        className="circles group-1 position-relative"
      >
        <motion.div
          animate={{ scale: 1.5 }}
          transition={{ repeat: Infinity, duration: 24 }}
          className="c1 circle"
        ></motion.div>
        <motion.div
          animate={{ scale: 2 }}
          transition={{ repeat: Infinity, duration: 24 }}
          className="c2 circle"
        ></motion.div>
        <motion.div
          animate={{ scale: 0.1 }}
          transition={{ repeat: Infinity, duration: 22 }}
          className="c3 circle"
        ></motion.div>
      </motion.div>
      <motion.div
        animate={{ x: "-120vw", y: 800, rotate: -360 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        className="circles group-2 position-relative"
      >
        <motion.div
          animate={{ scale: 1.5 }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="c1 circle"
        ></motion.div>
        <motion.div
          animate={{ scale: 2 }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="c2 circle"
        ></motion.div>
        <motion.div
          animate={{ scale: 0.1 }}
          transition={{ repeat: Infinity, duration: 18 }}
          className="c3 circle"
        ></motion.div>
      </motion.div>
      <div className="content-wrapper col-12">
        <div className="content col-sm-6 offset-sm-3 position-relative py-3 text-white">
          <h5>Hello, I am</h5>
          <h1>Nick Pugliesi</h1>
          <h4>Web Developer</h4>
          <h5>Learn More About What I Do</h5>
          <Link to="/about" className="arrow">
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Link>
          <a href="" className="github">
            My Github Page <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
