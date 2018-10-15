import React, { Component } from "react";

class NumInput extends Component {
  placeholder(type) {
    return type === "$" ? "$" : type !== "num" ? "%" : "years";
  }

  render() {
    const { val, onChange, options } = this.props;
    const { type, text } = options;

    return (
      <div className="NumInput">
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

export default NumInput;
