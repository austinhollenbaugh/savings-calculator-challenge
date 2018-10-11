import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div className="TextInput">
        <div className="text-input-wrapper">
          <p>{this.props.text}</p>
          <input
            value={this.props.amount}
            onChange={this.props.onChange}
            placeholder="put in a number!"
            type="number"
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
