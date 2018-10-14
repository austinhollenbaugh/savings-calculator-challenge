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

    this.principal = this.state.inputValues[0];
    this.monthlyPayment = this.state.inputValues[1];
    this.timeInYears = this.state.inputValues[2];
    this.interestRate = this.state.inputValues[3] / 100;
  }

  handleChange(i, e) {
    const inputValues = this.state.inputValues.slice(); // so we dont mutate
    inputValues[i] = parseInt(e.target.value);
    this.setState({ inputValues });

    this.principal = inputValues[0];
    this.monthlyPayment = inputValues[1];
    this.timeInYears = inputValues[2];
    this.interestRate = inputValues[3] / 100;
  }

  totalSavedPrincipal(years) {
    const rate = this.interestRate;
    const prin = this.principal;
    if (rate === 0) return prin;

    return prin * Math.pow(1 + rate / 12, 12 * years);
  }

  // should i leave the if on the above so these two match?
  totalSavedPayments(years) {
    const rate = this.interestRate;
    const payment = this.monthlyPayment;
    if (rate === 0) return payment * (years * 12);

    return payment * ((Math.pow(1 + rate / 12, 12 * years) - 1) / (rate / 12));
  }

  // based off this formula:
  // [ P(1+r/n)^(nt) ] + [ PMT × (((1 + r/n)^(nt) - 1) / (r/n)) ]
  // https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php?page=2

  // tested using https://www.investor.gov/additional-resources/free-financial-planning-tools/compound-interest-calculator

  totalInterestOnPrincipal(years) {
    return this.totalSavedPrincipal(years) - this.principal;
  }

  totalInterestOnPayments(years) {
    const months = years * 12;
    return this.totalSavedPayments(years) - this.monthlyPayment * months;
  }

  sumTotalInterest(years) {
    return (
      this.totalInterestOnPrincipal(years) + this.totalInterestOnPayments(years)
    );
  }

  savingsWithoutInterest(years) {
    return this.savingsWithInterest(years) - this.sumTotalInterest(years);
  }

  savingsWithInterest(years) {
    return this.totalSavedPrincipal(years) + this.totalSavedPayments(years);
  }

  listOfYearlySavings(years, calculateSavingsFunc) {
    let savings = [];
    for (let i = 0; i <= years; i++) {
      savings.push(calculateSavingsFunc(i));
    }
    console.log("SAVINGS:", savings);
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
              this.savingsWithInterest.bind(this)
            )}
            withoutInterest={this.listOfYearlySavings(
              this.timeInYears,
              this.savingsWithoutInterest.bind(this)
            )}
          />
        </div>
        <Totals
          saved={this.savingsWithInterest(this.timeInYears)}
          interest={this.sumTotalInterest(this.timeInYears)}
        />
      </div>
    );
  }
}

export default Main;
