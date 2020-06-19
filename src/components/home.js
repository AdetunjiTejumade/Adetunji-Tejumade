import React from 'react';
import NavBar from './navBar'
class Home extends React.Component {
  render() {
    return (

      React.createElement('div', { className: 'bg-black px-6' },
        React.createElement('div', { className: 'text-center flex justify-center items-center h-screen w-100' },
          React.createElement('div', { className: 'text-yellow-600' },
            React.createElement('h1', { className: 'text-4xl' },
              'HEY, I"M', React.createElement('span', { className: 'text-white font-semibold' }, ' ADETUNJI TEJUMADE', <br />, ' I AM A WEB DEVELOPER')
            ),
            <NavBar></NavBar>
          ))
        
      )
    )
      
  }
}

export default Home;