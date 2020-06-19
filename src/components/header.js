import React from 'react';
import NavBar from './navBar'
class Header extends React.Component {
  render() {
    return (
      React.createElement('div', {className:'flex justify-center pt-3'},
      React.createElement('div', {}, 
        React.createElement('h1', { className: 'text-3xl text-white font-semibold text-center' }, 'ADETUNJI TEJUMADE'),
        <NavBar> </NavBar>
      )
      )
    )
  }
}

export default Header;  