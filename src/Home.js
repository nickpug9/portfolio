import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function NewComponent(props) {
  return (
    <div className="content-wrapper px-3">
      <div className="bg">
        <img
          src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="coding"
        />
      </div>

      <div className="content py-3 text-white d-flex flex-column align-items-center mt-5">
        <h5 className="text-center">Hello, I am</h5>
        <h1>Nick Pugliesi</h1>
        <h4>Web Developer</h4>
        <Link to="/about" className="arrow app-link">
          <h5>
            Learn More About What I Do
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </span>
          </h5>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nickpug9"
          className="github app-link"
        >
          Visit My Github Page <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
      <div className="circles-container">
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
            animate={{ scale: 0.6 }}
            transition={{ repeat: Infinity, duration: 24 }}
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
            animate={{ scale: 0.6 }}
            transition={{ repeat: Infinity, duration: 20 }}
            className="c3 circle"
          ></motion.div>
        </motion.div>
      </div>
    </div>
    // <div className="wrapper">
    //   <h1>About</h1>

    //   <div className="content py-3 text-white position-absolute">
    //     <h5 className="text-center">Hello, I am</h5>
    //     <h1>Nick Pugliesi</h1>
    //     <h4>Web Developer</h4>
    //     <Link to="/about" className="arrow">
    //       <h5>
    //         Learn More About What I Do{" "}
    //         <span>
    //           <FontAwesomeIcon icon={faArrowAltCircleRight} />
    //         </span>
    //       </h5>
    //     </Link>

    //     <a href="" className="github home-link link-dark">
    //       Visit My Github Page <FontAwesomeIcon icon={faGithubSquare} />
    //     </a>
    //   </div>
    // </div>
  );
}

export default NewComponent;
