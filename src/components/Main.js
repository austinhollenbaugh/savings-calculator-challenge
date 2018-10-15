import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Totals from "./Totals";
import Graph from "./Graph";

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

    this.amountSavedWithPrincipal = this.amountSavedWithPrincipal.bind(this);
    this.savingsWithInterest = this.savingsWithInterest.bind(this);
    this.savingsWithoutInterest = this.savingsWithoutInterest.bind(this);
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

  amountSavedWithPrincipal(years, rate, prin) {
    if (rate === 0) return prin;

    return prin * Math.pow(1 + rate / 12, 12 * years);
  }

  amountSavedWithPayments(years, rate, payment) {
    if (rate === 0) return payment * (years * 12);

    return payment * ((Math.pow(1 + rate / 12, 12 * years) - 1) / (rate / 12));
  }

  // based off this formula:
  // [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
  // https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php?page=2

  interestEarnedOnPrincipal(years) {
    return this.amountSavedWithPrincipal(years) - this.principal;
  }

  interestEarnedOnPayments(years) {
    const months = years * 12;
    return (
      this.amountSavedWithPayments(years, this.rate, this.payment) -
      this.payment * months
    );
  }

  interestEarned(years) {
    return (
      this.interestEarnedOnPrincipal(years) +
      this.interestEarnedOnPayments(years)
    );
  }

  savingsWithoutInterest(years) {
    return this.savingsWithInterest(years) - this.interestEarned(years);
  }

  savingsWithInterest(years) {
    return (
      this.amountSavedWithPrincipal(years) + this.amountSavedWithPayments(years)
    );
  }

  listOfYearlySavings(years, calculateSavingsFunc) {
    let savings = [];
    for (let i = 0; i <= years; i++) {
      savings.push(calculateSavingsFunc(i).toFixed(2));
    }
    return savings;
  }

  render() {
    return (
      <div className="Main">
        <div className="main-wrapper">
          <Sidebar
            inputVals={this.state.inputValues}
            onChange={(i, e) => this.handleChange(i, e)}
          />
          <Graph
            inputVals={this.state.inputValues}
            savings={this.listOfYearlySavings(
              this.timeInYears,
              this.savingsWithInterest
            )}
            withoutInterest={this.listOfYearlySavings(
              this.timeInYears,
              this.savingsWithoutInterest
            )}
          />
        </div>
        <Totals
          saved={this.savingsWithInterest(this.timeInYears)}
          interest={this.interestEarned(this.timeInYears)}
        />
      </div>
    );
  }
}

export default Main;
