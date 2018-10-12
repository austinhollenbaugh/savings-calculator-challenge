import React, { Component } from "react";
import Title from "./components/Title";
import Main from "./components/Main.js";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Main />
      </div>
    );
  }
}

export default App;
