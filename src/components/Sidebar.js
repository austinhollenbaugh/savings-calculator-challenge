import React, { Component } from "react";
import CustomerInput from "./CustomerInput";
import "../styles/Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        {
          text: "Starting Amount",
          amount: ''
        },
        {
          text: "Amount to Save Each Month",
          amount: ''
        },
        {
          text: "Years to Save",
          amount: ''
        },
        {
          text: "Interest Rate",
          amount: ''
        },
      ]
    };
  }

  handleChange(i, e) {
    const inputs = this.state.inputs.slice(); // don't mutate the data
    inputs[i].amount = e.target.value;
    this.setState({ inputs: inputs });
    console.log("AMOUNT:", inputs[i]);
  }

  renderInputComponents(inputArray) {
    // Should I be looping inside my render function below instead?
    // I think I like this better because it's more readable

    return inputArray.map(({ text, amount }, i) => {
      return (
        <CustomerInput
          text={text}
          amount={amount}
          onChange={(e) => this.handleChange(i, e)}
          key={text}
        />
      )
    })
  }

  render() {
    return (
      <div className="Sidebar">
        {this.renderInputComponents(this.state.inputs)}
      </div>
    );
  }
}

export default Sidebar;
