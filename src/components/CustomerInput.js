import React, { Component } from "react";
import Slider from "./Slider";
import TextInput from "./TextInput";
import "../styles/CustomerInput.css";

class CustomerInput extends Component {
  render() {
    return (
      <div className="CustomerInput">
        <TextInput
          options={this.props.options}
          val={this.props.val}
          onChange={this.props.onChange}
        />
        <Slider
          val={this.props.val}
          onChange={this.props.onChange}
          options={this.props.options}
        />
        {/* should also pass in min and max as props to this */}
      </div>
    );
  }
}

export default CustomerInput;
