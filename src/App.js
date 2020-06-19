import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'

import Home from './components/home.js'
import About from './components/about.js'
// import NavBar from './components/navBar.js'
import './output.css';



// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

// const App = () => {
//   return React.createElement(
//     "div",
//     { className: "App"},
//     React.createElement("h1", {}, "Welcome to the dark side")
//   );
// };



class App extends Component {
  render() {
    return (
    // <Home></Home>
    <About></About>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
export default App;
