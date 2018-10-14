import React, { Component } from "react";
import Slider from "./Slider";
import TextInput from "./TextInput";

class InputWrapper extends Component {
  render() {
    const { val, onChange, options } = this.props;
    return (
      <div className="InputWrapper">
        <TextInput options={options} val={val} onChange={onChange} />
        <Slider val={val} onChange={onChange} options={options} />
      </div>
    );
  }
}

export default InputWrapper;
