import React, { useEffect } from "react";

import Home from "./home";
import About from "./about.js";
import Projects from "./projects";
import Contact from "./contact";
import HelpingHands from "./projects/work_1"
import MoveAndGroove from "./projects/work_2"
import BoulderBikeTour from "./projects/work_3"

import { Switch, Route, useLocation } from "react-router-dom";

function Routes() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [location]);
  return (
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/helping_hands">
        <HelpingHands />
      </Route>

      <Route path="/move_and_groove">
        <MoveAndGroove />
      </Route>

      <Route path="/boulder_bike_tour">
        <BoulderBikeTour />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
