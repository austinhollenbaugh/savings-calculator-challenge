import React from "react";
import ReactDOM from "react-dom";
import ShallowRenderer from "react-test-renderer/shallow";

import App from "../App";
import Title from "../components/Title";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import InputWrapper from "../components/InputWrapper";
import NumInput from "../components/NumInput";
import Slider from "../components/Slider";
import Graph from "../components/Graph";
import Totals from "../components/Totals";
import Total from "../components/Total";

const renderer = new ShallowRenderer();

// I didn't add a full test suite, but I wanted to add at least a few tests, just as examples of what I'm familiar with
// a few of these are rendered shallowly because they or one of their children are using canvas

// should I try asserting a bit more on the results I get from these?

describe("renders without crashing", () => {
  let fakeOptions;
  let fakeVals;
  beforeEach(() => {
    fakeVals = [1, 2, 3, 4];
    fakeOptions = {
      text: "Starting Amount",
      type: "$",
      min: 0,
      max: 10000
    };
  });

  test("App", () => {
    renderer.render(<App />);
  });

  test("Title", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("Main", () => {
    renderer.render(<Main />);
  });

  // consider setting default props on these components so they can render if props don't come through
  test("Sidebar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Sidebar inputVals={fakeVals} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("InputWrapper", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputWrapper options={fakeOptions} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("NumInput", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NumInput options={fakeOptions} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("Slider", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Slider options={fakeOptions} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("Graph", () => {
    renderer.render(<Graph />);
  });

  test("Totals", () => {
    let fakeSaved = 100;
    let fakeInterest = 0.01;
    const div = document.createElement("div");
    ReactDOM.render(<Totals saved={fakeSaved} interest={fakeInterest} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("Total", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Total amount={0} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
