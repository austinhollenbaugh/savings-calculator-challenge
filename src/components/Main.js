import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Totals from "./Totals";
import Graph from "./Graph";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Just the 4 values we're receiving from the inputs
      inputValues: Array(4).fill(0) // maybe want to set these to zero instead
    };
  }

  handleChange(i, e) {
    const inputValues = this.state.inputValues.slice(); // so we dont mutate
    inputValues[i] = e.target.value;
    this.setState({ inputValues });
  }

  totalSaved(valuesArr) {
    const principal = valuesArr[0];
    const monthlyPayment = valuesArr[1];
    const timeInYears = valuesArr[2];
    const interestRate = valuesArr[3] / 100;

    if (interestRate === 0) return 0;
    // if this goes into futureValueOfASeries as 0 it will return NaN

    const totalSaved = (
        this.compoundInterestForPrincipal(principal, interestRate, timeInYears) + this.futureValueOfASeries(monthlyPayment, interestRate, timeInYears)
      ).toFixed(2);

    return totalSaved;
  }

  compoundInterestForPrincipal(p, r, t) {
    // console.log(p * (Math.pow((1 + r / 12), (12 * t))));
    // this is returning zero
    return p * Math.pow((1 + r / 12), (12 * t));
  }

  futureValueOfASeries(payment, r, t) {
    return payment * ((Math.pow((1 + (r / 12)), (12 * t)) - 1) / (r / 12));
  }

  // based off this formula:
  // [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
  // https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php?page=2

  interestEarned(valuesArr) {
    // some formula
    // take the values I got up there, and just subtract out the money we put in

    return 500;
  }

  render() {
    return (
      <div className="Main">
        <div className="main-wrapper">
          <Sidebar
            inputValues={this.state.inputValues}
            onChange={(i, e) => this.handleChange(i, e)}
          />
          <Graph />
        </div>
        <Totals
          saved={this.totalSaved(this.state.inputValues)}
          interest={this.interestEarned(this.state.inputValues)}
        />
      </div>
    );
  }
}

export default Main;
