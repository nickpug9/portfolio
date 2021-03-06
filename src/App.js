// App.jsx

import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Nav.js";

import Home from "./Home.js";
import Resume from "./Resume.js";

import Projects from "./Projects.js";
// import Articles from "./Articles.js";
import About from "./About.js";
import "./App.css";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup className="switch">
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
        <Route path="/resume" component={Resume} />

        <Route path="/projects" component={Projects} />
        {/* <Route path="/articles" component={Articles} /> */}
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <AnimatedSwitch />
        <footer className="footer bg-dark py-1 mt-auto">
          <div className="container">
            <span className="text-muted">&copy; Nick Pugliesi</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
