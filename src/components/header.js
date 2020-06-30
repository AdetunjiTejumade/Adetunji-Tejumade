import React from 'react';
import NavBar from './navBar'
import {
  NavLink,
  HashRouter,
} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      React.createElement('div', { className: 'pt-6 px-6 pb-2 bg-nav md:px-40' },
        React.createElement('div', { className: 'header flex justify-between' },
          <HashRouter>
          <div>
           <a href="/"><NavLink to="" className='text-xl text-yellow font-semibold logo'>ADETUNJI TEJUMADE </NavLink></a>
            </div>
          </HashRouter>,
            React.createElement('div', {},
              <NavBar></NavBar>
            )

          
        ))
    )
  }
}

export default Header;  