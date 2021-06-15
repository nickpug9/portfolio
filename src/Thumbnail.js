import React from "react"; // Import the Component component from React
import "./App.css";

function Thumbnail(props) {
  // const [isActive, setActive] = useState("false");
  // const [buttonText, setButtonText] = useState("Show More");
  // const ToggleClass = () => {
  //   setActive(!isActive);
  //   if (buttonText === "Show More") {
  //     setButtonText("Show Less");
  //   } else {
  //     setButtonText("Show More");
  //   }
  // };
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
  return (
    <div className="card project col-md-6 offset-md-3 mb-5">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>

        <div className="project-category card-subtitle text-muted">
          {props.category}
        </div>
        <p className="card-text read-less overflow-hidden mb-5">
          {props.description}
        </p>
        {/* <button className="btn btn-info d-block  px-3 mb-3" id="readMore">
          {buttonText}
        </button> */}
        {ShowLink()}
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
