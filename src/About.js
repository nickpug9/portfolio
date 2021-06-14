import React from "react";

function NewComponent(props) {
  return (
    <div className="about container-fluid p-0">
      <div className="row text-white col-md-8 offset-md-2 p-0">
        <h1 className=" text-center mx-auto">About Me</h1>
        <div className="img-wrapper w-100 mb-3">
          <img
            src="https://res.cloudinary.com/nickpug/image/upload/q_80/v1623695086/Personal/headshot_2_kqmpve.jpg"
            alt="Nick Pugliesi Photo"
            className="profile d-block mx-auto"
          />
        </div>
        <p>
          I am a Web Developer with 1.5 years of front-end experience and I am
          interested in advancing my career in development. After completing my
          undergraduate degree in Computer Science, I spent a year and a half
          working as a Frontend Web Developer. Through my experience developing
          Wordpress sites, I have become proficient with HTML, CSS, JavaScript
          and disciplined with best SEO/optimization practices. Most notably, on
          sites with outdated frameworks I improved the average page speed(40%)
          and audited scores. The practical experience I have gained there has
          only increased my desire to advance as a Web Developer. Additionally,
          I have completed the highest rated Web Developer Bootcamp on Udemy
          where I gained a fundamental understanding of Full Stack Development.
          In my personal time, I have been learning about custom theme
          development, databases, APIs, cloud hosting, and React. A few of my
          personal projects where I put these acquired skills to the test are
          available to view on both my
          <a href="/projects"> projects page</a> and my{" "}
          <a href="https://github.com/nickpug9">github,</a>
        </p>
        <h4>Hobbies</h4>
        <p>
          I have a lot of interests that keep me going. Sports have been a
          mainstay in my life since my early childhood. From winning my little
          league homerun derby to playing in slow pitch softball leagues, I find
          myself most relaxed in the batter's box.
        </p>
        <p>
          I am a 4 for 4 Philadelphia sports diehard who is a former host of
          Gritizens of Philadelphia and Barreled up on Board podcasts.
        </p>
        <p>
          Along with sports, music is a big part of my life. Falling victim to
          instrument aquisition syndrome I have a collection of various
          instruments including guitar, piano, ukulele, cajon, and most recently
          mandolin. My passion for music started in high school when I took
          notice of the use of ukuleles in modern music. That inspired me to get
          one myself and in college I went on to perform and become Vice
          President of Penn State's PSUkulele club.
        </p>
      </div>
    </div>
  );
}

export default NewComponent;
