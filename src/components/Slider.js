import React, { Component } from "react";

class Slider extends Component {
  render() {
    // i might consider setting the min and maxes on these sliders to a range based on their initial inputs
    // what happens if they want to use the slider first though?
    return (
      <div className="Slider">
        <input
          type="range"
          min={this.props.options.min}
          max={this.props.options.max}
          value={this.props.val}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Slider;
