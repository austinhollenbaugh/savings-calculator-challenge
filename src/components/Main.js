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

  totalSaved(values, t) {
    const principal = values[0];
    const monthlyPayment = values[1];
    const timeInYears = t ? t : t === 0 ? t : values[2];
    const interestRate = values[3] / 100;

    const principalOnly =
      this.compoundInterestForPrincipal(principal, interestRate, timeInYears);

    const seriesOfPayments =
      this.futureValueOfASeries(monthlyPayment, interestRate, timeInYears);

    return (principalOnly + seriesOfPayments).toFixed(2); // string
  }

  totalInterestEarned(values, t) {
    const principal = values[0];
    const monthlyPayment = values[1];
    const timeInYears = t ? t : t === 0 ? t : values[2];
    const interestRate = values[3] / 100;

    if (interestRate === 0) return (0).toFixed(2);

    const principalOnly =
      this.compoundInterestForPrincipal(principal, interestRate, timeInYears);

    const seriesOfPayments =
      this.futureValueOfASeries(monthlyPayment, interestRate, timeInYears);

    // take the values I got up there, and just subtract out the money put in
    const principalInterest = (principalOnly - principal);
    const paymentInterest = (seriesOfPayments - (monthlyPayment * (timeInYears * 12)));

    return (principalInterest + paymentInterest).toFixed(2); // string
  }

  compoundInterestForPrincipal(p, r, t) {
    if (r === 0) return p; // replace with a ternary?

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

  yearlySavings(values) {
    let savingsEachYear = [];
    for (let i = 0; i <= values[2]; i++) {
      savingsEachYear.push(this.totalSaved(values, i));
    }
    return savingsEachYear;
  }

  yearlySavingsWithoutInterest(values) {
    let savingsEachYearWithoutInterest = [];
    for (let i = 0; i <= values[2]; i++) {
      savingsEachYearWithoutInterest.push(this.totalSaved(values, i) - this.totalInterestEarned(values, i));
    }
    return savingsEachYearWithoutInterest;
  };

  render() {
    const { inputValues } = this.state;
    return (
      <div className="Main">
        <div className="main-wrapper">
          <Sidebar
            values={inputValues}
            onChange={(i, e) => this.handleChange(i, e)}
          />
          <Graph
            values={inputValues}
            savings={this.yearlySavings(inputValues)}
            withoutInterest={this.yearlySavingsWithoutInterest(inputValues)}
          />
        </div>
        <Totals
          saved={this.totalSaved(inputValues)}
          interest={this.totalInterestEarned(inputValues)}
        />
      </div>
    );
  }
}

export default Main;
