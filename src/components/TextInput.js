import React, { Component } from "react";

class TextInput extends Component {
  placeholder(type) {
    return type === "$" ? "$" : type !== "num" ? "%" : "years";
  }
  
  render() {
    const { val, onChange } = this.props;
    const { type, text } = this.props.options;
    return (
      <div className="TextInput">
          <div className="input-descriptor">{text}: </div>
          <input
            className="number-input"
            value={val === 0 ? "" : val}
            onChange={onChange}
            placeholder={this.placeholder(type)}
            type="number"
          />
      </div>
    );
  }
}

export default TextInput;
