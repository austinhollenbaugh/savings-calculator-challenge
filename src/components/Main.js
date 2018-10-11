import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Title from "./Title";
import Totals from "./Totals";
import CustomerInput from "./CustomerInput";
import Graph from "./Graph";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        {
          text: "Starting Amount",
          value: ''
        },
        {
          text: "Amount to Save Each Month",
          value: ''
        },
        {
          text: "Years to Save",
          value: ''
        },
        {
          text: "Interest Rate",
          value: ''
        },
      ],
      totalSaved: 1000,
      interestEarned: 5
    };
  }

  handleChange(i, e) {
    const inputs = this.state.inputs.slice(); // don't mutate the data
    inputs[i].value = e.target.value;
    this.setState({ inputs: inputs });
    console.log("AMOUNT:", inputs[i].value);

    // as the values change, we'll have to do math, and that will have to be started in here, depending on what the change was.
  }

  renderInputComponents(inputArray) {
    return inputArray.map(({ text, value }, i) => {
      return (
        <CustomerInput
          text={text}
          val={value}
          onChange={e => this.handleChange(i, e)}
          key={text}
        />
      )
    })
  }

  render() {
    return (
      <div className="Main">
        <Title />
        <div className="main-wrapper">
          <Sidebar
            inputs={this.renderInputComponents(this.state.inputs)}
            onChange={e => this.handleChange(e)}
          />
          <Graph />
        </div>
      <Totals
        saved={this.state.totalSaved}
        interest={this.state.interestEarned}
      />
    </div>
  );
  }
}

export default Main;
