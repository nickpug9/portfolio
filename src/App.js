// App.jsx

import React from "react";
// Import the BrowserRouter, Route and Link components
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Nav.js";

import Home from "./Home.js";

import Projects from "./Projects.js";
// import Articles from "./Articles.js";
import About from "./About.js";
import "./App.css";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} classNames="slide" timeout={1000}>
      <Switch location={location}>
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
        <div className="bg">
          <img
            src="https://images.unsplash.com/photo-1567924675637-283a6742993e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1780&q=80"
            alt="computer background"
          />
        </div>
        <Nav />
        <div className="wrapper position-relative">
          <AnimatedSwitch />
        </div>
        <footer class="footer bg-dark py-3 mt-auto">
          <div class="container">
            <span class="text-muted">&copy; YelpCamp 2021</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
