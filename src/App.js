// App.jsx

import React from "react";
// Import the BrowserRouter, Route and Link components
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
  HashRouter,
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
    <HashRouter>
      <div className="App">
        <Nav />
        <div className="wrapper position-relative">
          <AnimatedSwitch />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
