import React, {useEffect, useState} from "react";

import Home from "./home";
import About from "./about.js";
import Works from "./works";
import Contact from "./contact";

import { Switch, Route, useLocation } from "react-router-dom";

function Routes() {
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname);
    if(location.pathname == "/"){
        document.body.style.overflow= "hidden";
    }else{
      document.body.style.overflow= "unset";
    }
  }, [location])
  return (
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
  );
}
export default Routes;
