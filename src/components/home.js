import React from 'react';
import NavBar from './navBar'

import {
  NavLink,
  HashRouter,
} from "react-router-dom";


class Home extends React.Component {
  render() {
    return (

      React.createElement('div', { className: 'bg-body px-6' },
        React.createElement('div', { className: 'text-center flex justify-center items-center h-screen w-100' },
          React.createElement('div', { className: 'text-yellow-600' },
            React.createElement('h1', { className: 'text-4xl' },
              'HEY, I"M', React.createElement('span', { className: 'text-white font-semibold' }, ' ADETUNJI TEJUMADE', <br />, ' I AM A WEB DEVELOPER')
            ),
            <HashRouter>
            <div>
                <ul className="inline flex justify-center text-black font-medium">
                    <li><NavLink to="/about" className="bg-yellow-600 mr-3 px-3">About</NavLink></li>
                    <li><NavLink to="/works" className="bg-yellow-600 mr-3 px-3">Works</NavLink></li>
                    <li><NavLink to="/contact" className="bg-yellow-600 mr-3 px-3">Contact</NavLink></li>
                </ul>
            </div>
        </HashRouter>
          ))

      )
    )

  }
}

export default Home;