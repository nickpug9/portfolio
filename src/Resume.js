import React from "react";

function NewComponent(props) {
  return (
    <div className="container-fluid">
      <div className="row w-100 d-flex text-white">
        <h1 className="w-100 text-center">Resume</h1>
        <div className="resume-header__left w-50">
          <h2>Nick Pugliesi</h2>
          <h4>Web Developer</h4>
        </div>
        <div className="resume-header__right w-50">
          <h5 className="text-right">Pittsburgh, PA</h5>
          <h5 className="text-right">nickpug9@gmail.com</h5>
          <h5 className="text-right">
            <a href="tel:2679872413">(267) 987-2413</a>
          </h5>
          <h5 className="text-right">
            <a href="https://github.com/nickpug9">github.com/nickpug9</a>
          </h5>
        </div>
        <div className="resume-body d-flex">
          <div className="resume-body__left">
            <h3 className="uppercase">Projects</h3>
            <h5>Personal Projects - on GitHub</h5>
            <p>
              Various projects where I learned to use bootstrap, js, react, and
              custom wordpress theme development -
              <a href="https://github.com/nickpug9">🔗 github.com/nickpug9</a>
            </p>{" "}
            <h5>YelpCamp</h5>
            <p>
              Built a responsive Yelp type RESTful app that allows users to Add
              and review campgrounds Created using Mongoose, Express, and Node
              Complete with user validated form submissions
            </p>
            <h5>Database Management System</h5>
            <p>
              Built a relational database of students, professors, and classes
              Written in C it is managed in a similar fashion to mySQL User can
              input commands such as ADD, DELETE, GROUP, SORT, or VIEW The
              project focuses on using read, write, and seek functions to store
              and retrieve the data with proper validation (e.x. No student can
              have two classes at the same time).{" "}
            </p>
            <h5>Lockheed Martin Case Competition</h5>
            <p>
              Delegated a small team of fellow students for a week at Lockheed
              Martin. Used their resources to validate and pitch where the
              company would achieve the most success internationally.
            </p>
            <h3>Experience</h3>
            <h5>Udemy Web Developer Bootcamp by Colt Steele</h5>
            <p>
              The web developer bootcamp is a 63 hour course plus projects
              covering the most popular dev tools and technologies. It is the
              highest rated Web Development course with 600,000+ students.
            </p>
            <h5>Junior Web Developer, Nextlevel.com Moorestown, NJ</h5>
            <p>
              Nextlevel.com is a digital marketing company for lawyers.
              Responsibilities: Developed responsive websites for clients using
              Timber, TailwindCSS, and StimulusJS Setup form submissions,
              structured data, and tracking with GTM Integrated HTML/CSS and
              Javascript into the Wordpress CMS and conducted day-to-day
              maintenance of the websites and routine audits.
            </p>
            <h5>
              Learning assistant/grader Pennsylvania State University, State
              College, PA
            </h5>
            <p>
              Assisted students during recitations in completing weekly projects
              in C++ and MatLab. I was responsible for reviewing code in exams
              and projects as well as grading the weekly/monthly assignments.
            </p>
          </div>
          <div className="resumne-body__right">
            <h3 className="uppercase">Education</h3>
            <h5>BSc in Computer Science Pennsylvania State University</h5>
            <h5>
              {" "}
              Minor in Entrepreneurship/Innovation Pennsylvania State University
            </h5>
            <h3>SKILLS/TECHNOLOGIES</h3>
            <h5>HTML</h5> <h5> CSS</h5>{" "}
            <p> (TailwindCSS, Bootstrap, Flexbox, Bulba, SCSS)</p>{" "}
            <h5> JavaScript</h5> <p> (AJAX, ES6, Node, Express, Stimulus)</p>
            <h5>Git</h5> <p> (Gitlab, Github, Bitbucket)</p>
            <h5> CI/CD</h5> <h5> Wordpress</h5> <h5> Express</h5>
            <h5> NoSQL</h5>
            <p> (MongoDB)</p> <h5> Cloud</h5>
            <p> (Heroku, Kinsta, AWS(Lightsail))</p>
            <h5> REST APIs</h5>
            <h5> Deployment</h5>
            <p> (CI/CD, SFTP)</p>
            <h5> SEO</h5> <p> (Yoast, Structured Data, SEMRush)</p>
            <h5>DNS</h5> <p> (Cloudflare)</p>
            <h3> COMPUTER SCIENCE COURSES</h3>
            <h5> Comp Organization and Design</h5>
            <h5> Data Structures and Algorithms</h5>
            Program Language Concepts <h5>Intro to System Programming</h5>
            <h5>Intro Theory Computation</h5>
            <h5> Cyber Security</h5> <h5>Operating Systems</h5>
            <h3>Activities(Clubs)</h3>
            <h5>PSUkulele – Vice President</h5>
            <h5>State Development Klub (SDK)</h5>
            <h5>Security Risk and Analysis</h5>
            <h3>CERTIFICATIONS</h3>
            <h5> Microsoft Word and PowerPoint 2010</h5>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
