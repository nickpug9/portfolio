import React from "react"; // Import the Component component from React
// import { Link } from "react-router-dom"; // Import the Link component
import "./App.css";

function Thumbnail(props) {
  return (
    <div className="card project col-md-8 offset-md-2 mb-5">
      <div class="card-body">
        <h3 className="card-title">{props.title}</h3>

        <div className="project-category card-subtitle text-muted">
          {props.category}
        </div>
        <p class="card-text">{props.description}</p>
        <a href={props.link} className="project-link">
          Visit Site
        </a>
        <a href={props.link}>
          <div className="project-image">
            <img src={props.image} className="w-100" alt="Project" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Thumbnail;
