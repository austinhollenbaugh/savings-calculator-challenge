import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Totals from "./Totals";
import Graph from "./Graph";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Just the 4 values we're receiving from the inputs
      inputValues: Array(4).fill(0)
    };
  }

  handleChange(i, e) {
    const inputValues = this.state.inputValues.slice(); // so we dont mutate
    inputValues[i] = parseInt(e.target.value); 
    this.setState({ inputValues });
  }

  totalSaved(values) {
    const principal = values[0];
    const monthlyPayment = values[1];
    const timeInYears = values[2];
    const interestRate = values[3] / 100;

    // setting these to the class may be frowned upon, I need to check on that.
    this.principalOnly =
      this.compoundInterestForPrincipal(principal, interestRate, timeInYears);

    this.seriesOfPayments =
      this.futureValueOfASeries(monthlyPayment, interestRate, timeInYears);

    return (this.principalOnly + this.seriesOfPayments).toFixed(2);
  }

  compoundInterestForPrincipal(p, r, t) {
    if (r === 0) return p;

    return p * Math.pow((1 + r / 12), (12 * t));
  }

  futureValueOfASeries(payment, r, t) {
    if (r === 0) return payment * (t * 12);

    return payment * ((Math.pow((1 + (r / 12)), (12 * t)) - 1) / (r / 12));
  }

  // based off this formula:
  // [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
  // https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php?page=2

  // tested using https://www.investor.gov/additional-resources/free-financial-planning-tools/compound-interest-calculator

  interestEarned(values) {
    const principal = values[0];
    const monthlyPayment = values[1];
    const timeInYears = values[2];
    const interestRate = values[3] / 100;

    if (interestRate === 0) return (0).toFixed(2);

    // take the values I got up there, and just subtract out the money put in
    const principalInterest = (this.principalOnly - principal); // divide? or subtract?
    const paymentInterest = (this.seriesOfPayments - (monthlyPayment * (timeInYears * 12)));

    return (principalInterest + paymentInterest).toFixed(2);
  }

  render() {
    return (
      <div className="Main">
        <div className="main-wrapper">
          <Sidebar
            values={this.state.inputValues}
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
