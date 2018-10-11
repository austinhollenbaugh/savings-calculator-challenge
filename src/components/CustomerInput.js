import React, { Component } from "react";
import Slider from "./Slider";
import TextInput from "./TextInput";
import "../styles/CustomerInput.css";

class CustomerInput extends Component {
  render() {
    return (
      <div className="CustomerInput">
        <TextInput
          text={this.props.text}
          amount={this.props.amount}
          onChange={this.props.onChange}
        />
        <Slider amount={this.props.amount} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default CustomerInput;
