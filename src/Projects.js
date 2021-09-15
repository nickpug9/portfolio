import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="container-fluid p-0">
      <div className="rows px-3">
        <h1 className="col-md-4 offset-md-4 text-center">Projects</h1>
        <h5 className="text-white px-3 col-md-6 offset-md-3">
          The following is a list of the most notable projects I have recently
          worked on.
        </h5>
        <Thumbnail
          link="https://intense-fjord-76142.herokuapp.com/"
          showLink="true"
          image="https://res.cloudinary.com/nickpug/image/upload/q_70/v1623103732/Personal/YelpCamp-screenshot_etywua.jpg"
          title="YelpCamp"
          category="App"
          description="YelpCamp is a fully functional RESTful CRUD app that behaves similar to Yelp. Visitors of the app are able to register their email to create an account (via validated form submissions) where they can add to the directory of listed campgrounds or leave a review on campgrounds others have submitted. The app was built using Node, Express, and Mongoose. Mongoose is a NoSQL database, however, this app also applies relational database functionality. One notable feature is the integration of MapBox api. Using a database of cities from around the world, the app matches the coordinates to the location field of the submitted campground(s) and pins it on the MapBox map. Other skills and technologies used are as follows: Cloudinary images, ejs, Bootstrap, database seeding, routing, and caching/sessions."
        />

        <Thumbnail
          link="https://github.com/nickpug9/Number-Guesser/"
          showLink="true"
          image="https://res.cloudinary.com/nickpug/image/upload/v1631665856/number_guesser_lepprz.jpg"
          title="Number Guesser"
          category="App"
          description="Number Guesser is a small console app built in .NET using C#. The program asks the user for their name and then it will ask for the user to guess the randomly generated number. The user will keep guessing until they guess correct. User has the option to play again or exit. This project was made during a code along to a video linked in the readme on GitHub. It serves as an introductory to properly set up and get to coding a .Net console application"
        />

        <Thumbnail
          link="https://pokedex.live-website.com/"
          showLink="true"
          image="https://res.cloudinary.com/nickpug/image/upload/q_70/v1623428702/Personal/pokedex-screenshot_bwonvq.jpg"
          title="Pokedex"
          category="App"
          description="A website that uses StimulusJs and Animejs that emulates a virtual Pokedex.
Pokedex emulates a fully functional virtual pokedex of the gen one pokemon. Built using StimulusJs this app uses various functions from AnimeJs to animate motions.
"
        />
        <Thumbnail
          link="https://github.com/nickpug9/nickpug"
          showLink="true"
          image=""
          title="Custom Wordpress Theme"
          category="Theme"
          description="I have built a custom wordpress theme that utilizes Timber, TailwindCSS, and StimulusJs. The theme focuses on features that allow most of the content to be controlled in Wordpress’s admin. By implementing custom templates and ACF, every page/page type is able to have its own unique layouts and functionality. The theme is very beginner friendly. By using StimulusJs, which links Javascript components to the html, beginners are able to focus on html and use controllers to enhance it. Much of the backend tasks are automated by Gulp, including minification, and legacy. CI/CD pipelines are also set up."
        />

        <Thumbnail
          link="https://mlbtheshowmarketplace.live-website.com/"
          showLink="true"
          image="https://res.cloudinary.com/nickpug/image/upload/v1627948940/Personal/SharedScreenshot_qmycsp.jpg"
          title="MLB: The Show Marketplace"
          category="app"
          description="This app is designed to help users earn the most stubs in MLB: The Show. IT retrieves data from MLB: The Show’s servers and lists them. After the api calls, the app calculates the biggest profit margins of each card. Users can sort through the lists and see which cards are the best to flip."
        />

        <Thumbnail
          link="https://nickpug9.github.io/pricing-panel/"
          showLink="true"
          image=""
          title="Pricing Panel"
          category="UX design"
          description="Pricing Panel is a basic responsive UX design of a tiered pricing panel. This is one of the first projects I learned how to make using Bootstrap."
        />
        <Thumbnail
          link="https://nickpug9.github.io/museum-of-candy/"
          showLink="true"
          image=""
          title="Museum of Candy"
          category="UX Design"
          description="Museum of candy is a simple responsive landing page. This also is one of the first projects that introduced me to bootstrap."
        />
        <Thumbnail
          link=""
          showLink="false"
          image=""
          title="Picture Car Guys"
          category="App"
          description="Picture Car Guys is a directory of car listings to be used as movie props. Users would create accounts and use form submissions for listings. This was built using a car directory Wordpress theme before I learned backend programming and was my first experience in freelance work. The site is not currently live."
        />
      </div>
    </div>
  );
}

export default Projects;
