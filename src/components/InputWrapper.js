import React, { Component } from "react";
import Slider from "./Slider";
import NumInput from "./NumInput";

class InputWrapper extends Component {
  render() {
    const { val, onChange, options } = this.props;
    return (
      <div className="InputWrapper">
        <NumInput options={options} val={val} onChange={onChange} />
        <Slider options={options} val={val} onChange={onChange} />
      </div>
    );
  }
}

export default InputWrapper;
