import React, { Component } from 'react';

import Header from './landing';
import Home from './home';
import About from './about.js';
import Works from './works'
import navBar from './navBar';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,

} from "react-router-dom";



class Landing extends Component {
    render() {
        return (
            



                <HashRouter>
<div>
                    <Route path="/about" component={About} />


                    <Route path="/works" component={Works} />

                    <Route exact path="/" component={Home} />

                
               
            </div>
            </HashRouter>
        )

    };
};
export default Landing;