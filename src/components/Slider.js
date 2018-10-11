import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <input
          type="range"
          min="0"
          max="10000"
          value={this.props.amount}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Slider;
