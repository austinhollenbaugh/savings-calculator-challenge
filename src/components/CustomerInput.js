import React, { Component } from "react";
import "../styles/CustomerInput.css";
import Slider from "./Slider";

class CustomerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    };
  }

  handleChange(e) {
    this.setState({ amount: e.target.value });
    console.log("AMOUNT:", this.state.amount);
  }

  render() {
    return (
      <div className="CustomerInput">
        <div className="amount-wrapper">
          <p>{this.props.text}</p>
          <input
            value={this.state.amount}
            onChange={e => this.handleChange(e)}
            placeholder="put in a number!"
            type="number"
          />
        </div>
        {/* make the above a separate component? */}
        <Slider amount={this.state.amount} />
      </div>
    );
  }
}

export default CustomerInput;
