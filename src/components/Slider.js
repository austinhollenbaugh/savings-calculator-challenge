import React, { Component } from "react";

class Slider extends Component {
  render() {
    const { val, onChange, options } = this.props;
    return (
      <div className="Slider">
        <input
          className="range-input"
          type="range"
          min={options.min}
          max={options.max}
          value={val}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Slider;
