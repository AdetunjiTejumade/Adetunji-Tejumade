import React, { Component } from 'react';

import {
    NavLink,
    HashRouter,
} from "react-router-dom";


class navBar extends Component {
    render() {
        return (

            <HashRouter>
                <div>
                    <ul className="inline flex justify-center text-black font-medium">
                        <li><NavLink to="/about" className="bg-yellow-600 mr-3 px-3">About</NavLink></li>
                        <li><NavLink to="/works" className="bg-yellow-600 mr-3 px-3">Works</NavLink></li>
                        <li><NavLink to="/contact" className="bg-yellow-600 mr-3 px-3">Contact</NavLink></li>
                    </ul>
                </div>
            </HashRouter>
        )


    };
};
export default navBar;