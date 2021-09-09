import React, { useState } from "react";

import "./App.css";

function Thumbnail(props) {
  const [isActive, setActive] = useState("false");
  const [buttonText, setButtonText] = useState("Show More");
  const DisplayDescription = () => {
    if (buttonText === "Show More") {
      return (
        <p className="card-text read-less overflow-hidden mb-5">
          {props.description}
        </p>
      );
    } else {
      return (
        <p className="card-text overflow-hidden mb-5">{props.description}</p>
      );
    }
  };
  const ToggleClass = () => {
    setActive(!isActive);
    console.log("toggle");
    if (buttonText === "Show More") {
      setButtonText("Show Less");
    } else {
      setButtonText("Show More");
    }
    // DisplayDescription();
  };
  const ShowLink = () => {
    if (props.showLink === "true") {
      return (
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-success px-4 mb-3"
        >
          Visit Site
        </a>
      );
    }
  };
  const ShowImage = () => {
    console.log(props.image);
    if (props.image) {
      return (
        <a href={props.link}>
          <div className="project-image">
            <img src={props.image} className="w-100" alt="Project" />
          </div>
        </a>
      );
    }
  };
  return (
    <div className="card project col-md-6 offset-md-3 mb-5">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>

        <div className="project-category card-subtitle text-muted">
          {props.category}
        </div>
        {DisplayDescription()}
        <button
          className="btn btn-info d-block  px-3 mb-3"
          id="readMore"
          onClick={ToggleClass}
        >
          {buttonText}
        </button>
        {ShowLink()}
        {ShowImage()}
      </div>
    </div>
  );
}

export default Thumbnail;
