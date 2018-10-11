import React, { Component } from "react";
import logo from "./assets/logo.svg";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Totals from "./components/Totals";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="main-wrapper">
          <Sidebar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <Totals />
      </div>
    );
  }
}

export default App;
