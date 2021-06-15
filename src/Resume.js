import React from "react";

function NewComponent(props) {
  return (
    <div className="resume container-fluid">
      <div className="row col-10 col-md-10 mx-auto d-flex flex-wrap text-white">
        <h1 className="w-100 text-center">Resume</h1>
        <div className="resume-header__left">
          <h2>Nick Pugliesi</h2>
          <h4>Web Developer</h4>
        </div>
        <div className="resume-header__right">
          <h5 className=" text-white">Pittsburgh, PA</h5>
          <h5 className=" text-white">nickpug9@gmail.com</h5>
          <h5>
            <a href="tel:2679872413" className="app-link">
              (267) 987-2413
            </a>
          </h5>
          <h5>
            <a href="https://github.com/nickpug9" className="app-link">
              github.com/nickpug9
            </a>
          </h5>
        </div>
        <div className="resume-body d-flex flex-wrap">
          <div className="resume-body__left">
            <h3 className="uppercase">Projects</h3>
            <h5>Personal Projects - on GitHub</h5>
            <p>
              Various projects where I learned to use bootstrap, js, react, and
              custom wordpress theme development - 🔗
              <a className="app-link" href="https://github.com/nickpug9">
                github.com/nickpug9
              </a>
            </p>
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
              have two classes at the same time).
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
          <div className="resume-body__right">
            <h3 className="uppercase">Education</h3>
            <h5>BSc in Computer Science Pennsylvania State University</h5>
            <h5>
              Minor in Entrepreneurship/Innovation Pennsylvania State University
            </h5>
            <h3 className="lh-1 m-0">Skills/</h3>
            <h3 className="lh-1"> Technologies</h3>
            <h6>HTML</h6>
            <div className="subject">
              <button className="btn btn-link app-link"> CSS</button>
              <p className="subject-modal p-3">
                (TailwindCSS, Bootstrap, Flexbox, Bulba, SCSS)
              </p>
            </div>
            <div className="subject">
              <button className="btn btn-link app-link"> JavaScript</button>
              <p className="subject-modal p-3">
                (AJAX, ES6, Node, Express, Stimulus)
              </p>
            </div>
            <div className="subject">
              <button className="btn btn-link app-link">Git</button>
              <p className="subject-modal p-3">(Gitlab, Github, Bitbucket)</p>
            </div>
            <h6> CI/CD</h6> <h6> Wordpress</h6> <h6> Express</h6>
            <div className="subject">
              <button className="btn btn-link app-link">NoSQL</button>
              <p className="subject-modal p-3">(MongoDB)</p>
            </div>
            <div className="subject">
              <button className="btn btn-link app-link">Cloud</button>
              <p className="subject-modal p-3">
                (Heroku, Kinsta, AWS(Lightsail))
              </p>
            </div>
            <h6> REST APIs</h6>
            <div className="subject">
              <button className="btn btn-link app-link">Deployment</button>
              <p className="subject-modal p-3">(CI/CD, SFTP)</p>
            </div>
            <div className="subject">
              <button className="btn btn-link app-link">SEO</button>
              <p className="subject-modal p-3">
                (Yoast, Structured Data, SEMRush)
              </p>
            </div>
            <div className="subject">
              <button className="btn btn-link app-link">DNS</button>
              <p className="subject-modal p-3">(Cloudflare)</p>
            </div>
            <h3> Compute Science Courses</h3>
            <h5> Comp Organization and Design</h5>
            <h5> Data Structures and Algorithms</h5>
            Program Language Concepts <h5>Intro to System Programming</h5>
            <h5>Intro Theory Computation</h5>
            <h5> Cyber Security</h5> <h5>Operating Systems</h5>
            <h3>Activities(Clubs)</h3>
            <h5>PSUkulele – Vice President</h5>
            <h5>State Development Klub (SDK)</h5>
            <h5>Security Risk and Analysis</h5>
            <h3>Certifications</h3>
            <h5> Microsoft Word and PowerPoint 2010</h5>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
