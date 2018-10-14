import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Title from "../components/Title";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import InputWrapper from "../components/InputWrapper";
import TextInput from "../components/TextInput";
import Slider from "../components/Slider";
import Graph from "../components/Graph";
import Totals from "../components/Totals";
import Total from "../components/Total";

// is it bad that it's not very semantic now?

describe("renders without crashing", () => {
  it("App", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Title", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Main", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Sidebar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("InputWrapper", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputWrapper />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("TextInput", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TextInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Slider", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Slider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Graph", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Graph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Totals", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Totals />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Total", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Total />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
