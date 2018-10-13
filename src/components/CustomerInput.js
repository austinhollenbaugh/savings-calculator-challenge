import React, { Component } from "react";
import Slider from "./Slider";
import TextInput from "./TextInput";

class CustomerInput extends Component {
  render() {
    const { val, onChange, options } = this.props;
    return (
      <div className="CustomerInput">
        <TextInput
          options={options}
          val={val}
          onChange={onChange}
        />
        <Slider
          val={val}
          onChange={onChange}
          options={options}
        />
      </div>
    );
  }
}

export default CustomerInput;
