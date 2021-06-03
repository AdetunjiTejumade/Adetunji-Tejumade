import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";

import "./output.css";
import "./App.css";

import Routes from "./components/routes";
import { BrowserRouter  } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));

export default App;
