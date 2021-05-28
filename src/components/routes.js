import React, { useEffect, useState } from "react";

import Home from "./home";
import About from "./about.js";
import Works from "./works";
import Contact from "./contact";
import HelpingHands from "./works/work_1"
import MoveAndGroove from "./works/work_2"
import BoulderBikeTour from "./works/work_3"

import { Switch, Route, useLocation } from "react-router-dom";

function Routes() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/") {
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

      <Route path="/works">
        <Works />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
