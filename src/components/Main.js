import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Totals from "./Totals";
import Graph from "./Graph";

import utils from "../utils";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: Array(4).fill(0)
    };

    this.principal = this.state.inputValues[0];
    this.payment = this.state.inputValues[1];
    this.years = this.state.inputValues[2];
    this.rate = this.state.inputValues[3] / 100;
  }

  handleChange(i, e) {
    const inputValues = this.state.inputValues.slice();
    inputValues[i] = parseInt(e.target.value);
    this.setState({ inputValues });

    this.principal = inputValues[0];
    this.payment = inputValues[1];
    this.years = inputValues[2];
    this.rate = inputValues[3] / 100;
  }

  render() {
    const {
      listOfYearlySavingsWithInterest,
      listOfYearlySavingsWithoutInterest,
      savingsWithInterest,
      interestEarned
    } = utils(this.principal, this.payment, this.years, this.rate);
    return (
      <div className="Main">
        <div className="main-wrapper">
          <Sidebar
            inputVals={this.state.inputValues}
            onChange={(i, e) => this.handleChange(i, e)}
          />
          <Graph
            inputVals={this.state.inputValues}
            savings={listOfYearlySavingsWithInterest()}
            withoutInterest={listOfYearlySavingsWithoutInterest()}
          />
        </div>
        <Totals
          saved={savingsWithInterest(this.years)}
          interest={interestEarned(this.years)}
        />
      </div>
    );
  }
}

export default Main;
