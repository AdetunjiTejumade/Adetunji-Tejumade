import React from 'react';
import NavBar from './navBar'
class Header extends React.Component {
  render() {
    return (
      React.createElement('div', { className: 'pt-6 px-6 pb-2 bg-nav' },
        React.createElement('div', { className: 'header flex justify-between' },
          
            React.createElement('div', {},
              React.createElement('h1', { className: 'text-xl text-yellow font-semibold logo' }, 'ADETUNJI TEJUMADE'),
            ),
            React.createElement('div', {},
              <NavBar></NavBar>
            )

          
        ))
    )
  }
}

export default Header;  