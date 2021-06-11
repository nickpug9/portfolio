import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="container-fluid">
      <div className="rows">
        <h1 className="col-4 offset-4 text-center">Projects</h1>
        <h5 className="text-white px-3 col-md-8 offset-md-2">
          The following is a list of the most notable projects I have recently
          worked on.
        </h5>
        <Thumbnail
          link="https://intense-fjord-76142.herokuapp.com/"
          image="https://res.cloudinary.com/nickpug/image/upload/v1623103732/Personal/YelpCamp-screenshot_etywua.jpg"
          title="YelpCamp"
          category="App"
          description="gnfdlngs"
        />
        {/* <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      /> */}
      </div>
    </div>
  );
}

export default Projects;
