import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'

import './output.css';
import './App.css';

import Landing from './components/landing'

class App extends Component {
  render() {
    return (
          <Landing></Landing>        
    );

  }

}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
export default App;