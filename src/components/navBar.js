import React, { Component } from 'react';

import {
    NavLink,
    HashRouter,
} from "react-router-dom";


class navBar extends Component {
state = {
    toggle:false
}
Toggle = () => {
    this.setState({toggle:!this.state.toggle})
}

    render() {
        return (

            <HashRouter>
                <div className="nav-sm">
                <button className="text-white text-xl font-semibold" onClick={this.Toggle}>☰</button>


                <div className={this.state.toggle ? "overlay": "none"} >
                    <button className="closebtn"  onClick={this.Toggle}>&times;</button>
                    <div className="overlay-content font-extrabold text-3xl">

                        <a href="/"><NavLink to="" >Home </NavLink></a>
                        <a href="/"><NavLink to="/about" >About</NavLink></a>
                        <a href="/"><NavLink to="/works" >Works</NavLink></a>
                        <a href="/"><NavLink to="/contact" >Contact</NavLink></a>
                    </div>
                </div>
                </div>
                <div>
                    <div className="text-white font-normal nav-lg ">
                        <a href="/"><NavLink to="" className="mr-4 hover:underline">HOME </NavLink></a>
                        <a href="/"><NavLink to="/about" className="mr-4">ABOUT</NavLink></a>
                        <a href="/"><NavLink to="/works" className="mr-4">WORKS</NavLink></a>
                        <a href="/"><NavLink to="/contact" className="mr-4">CONTACT</NavLink></a>
                    </div>

                </div>
            </HashRouter>
        )


    };
};
export default navBar;