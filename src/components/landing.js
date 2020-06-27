import React, { Component } from 'react';

import Home from './home';
import About from './about.js';
import Works from './works'
import Contact from './contact';
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
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />


                    <Route path="/works" component={Works} />

                    <Route exact path="/" component={Home} />



                </div>
            </HashRouter>
        )

    };
};
export default Landing;