import React from "react";

import Home from "./home";
import About from "./about.js";
import Works from "./works";
import Contact from "./contact";

import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
      <div>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/works">
            <Works />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}
export default Routes;
