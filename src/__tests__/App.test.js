import React from "react";
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

describe("renders without crashing", () => {
  test("App", () => {
    renderer.render(<App />);
  });

  test("Title", () => {
    renderer.render(<Title />);
  });

  test("Main", () => {
    renderer.render(<Main />);
  });

  test("Sidebar", () => {
    renderer.render(<Sidebar />);
  });

  test("InputWrapper", () => {
    renderer.render(<InputWrapper />);
  });

  test("NumInput", () => {
    renderer.render(<NumInput />);
  });

  test("Slider", () => {
    renderer.render(<Slider />);
  });

  test("Graph", () => {
    renderer.render(<Graph />);
  });

  test("Totals", () => {
    renderer.render(<Totals />);
  });

  test("Total", () => {
    renderer.render(<Total />);
  });
});
