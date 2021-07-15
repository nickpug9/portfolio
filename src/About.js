import React from "react";

function NewComponent(props) {
  return (
    <div className="about container-fluid p-0">
      <div className="row text-white col-11 col-md-8 mx-auto px-3">
        <h1 className=" text-center mx-auto">About Me</h1>
        <div className="img-wrapper w-100 mb-3">
          <img
            src="https://res.cloudinary.com/nickpug/image/upload/q_80/v1623695086/Personal/headshot_2_kqmpve.jpg"
            alt="Nick Pugliesi"
            className="profile d-block mx-auto"
          />
        </div>
        <p>
          I am a Web Developer with 1.5 years of front-end experience and I am
          interested in advancing my career in development. I have completed my
          undergraduate degree in Computer Science, at Penn State where I
          learned OOP, C, and database management. I spent a year and a half
          working as a Frontend Web Developer for a digital marketing company
          for lawyers. Through my experience developing Wordpress sites, I have
          become proficient with HTML, CSS, JavaScript and disciplined with best
          SEO/optimization practices. Most notably, on sites with outdated
          frameworks I improved the average page speed(40%) and audited scores.
          The practical experience I have gained there has only increased my
          desire to advance as a Web Developer. Additionally, I have completed
          the highest rated Web Developer Bootcamp on Udemy where I gained a
          fundamental understanding of Full Stack Development. In my personal
          time, I have been learning about custom theme development, databases,
          APIs, cloud hosting, and React. A few of my personal projects where I
          put these acquired skills to the test are available to view on both my{" "}
          <a className="app-link" href="/projects">
            projects page
          </a>{" "}
          and my{" "}
          <a
            className="app-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nickpug9"
          >
            github,
          </a>
        </p>
        <h4>Hobbies</h4>
        <div className=" d-flex flex-column-reverse flex-md-row flex-wrap justify-between my-3">
          <div className="about-interests">
            <p>
              When I'm not coding I enjoy getting outside whenever I can. My
              girlfriend and I are always out on walks, visiting a museum or
              checking out a local farmers market. We go out kayaking whenever
              we get the chance and enjoy spending as much time as we can in the
              sun.
            </p>
          </div>
          <div className="about-text-sports">
            <h5>Sports</h5>
            <p>
              I have a lot of interests that keep me going. Sports have been a
              mainstay in my life since my early childhood. Baseball for sure
              has been an important part of my life. From winning my little
              league homerun derby to playing in slow pitch softball leagues, I
              find myself most relaxed in the batter's box.
            </p>
            <p>
              I have spent most of my life as a team player and it has shaped my
              mindset to focus on not only my individual success but the success
              of those around me.
            </p>
          </div>
          <div className="about-image-sports">
            <img
              src="https://images.unsplash.com/photo-1615146524655-bfe941ae908f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3934&q=80"
              alt="rocky statue"
              className="w-100 px-3 ms-auto"
            />
          </div>
        </div>

        <div className="d-flex flex-column-reverse flex-md-row flex-wrap justify-between my-3 align-items-end">
          <div className="about-text-music">
            <h5>Music</h5>
            <p>
              Along with sports, music is a big part of my life. Falling victim
              to instrument aquisition syndrome I have a collection of various
              instruments including guitar, piano, ukulele, cajon, and most
              recently mandolin. My passion for music started in high school
              when I took notice of the use of ukuleles in modern music. That
              inspired me to get one myself and in college I went on to perform
              and become Vice President of Penn State's PSUkulele club.
            </p>
          </div>
          <div className="about-image-music">
            <img
              src="https://res.cloudinary.com/nickpug/image/upload/q_70/v1623782883/Personal/20190216_033931_ccifrs.jpg"
              alt="Thon performance"
              className="w-100 px-3 ms-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
