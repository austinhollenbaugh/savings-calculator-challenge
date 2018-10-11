import React, { Component } from "react";
import "../styles/Slider.css";

class Slider extends Component {
  handleChange(e) {
    console.log(e.target.value);
  }
  // have to figure out how to pass that up to the other component

  render() {
    return (
      <div className="Slider">
        <input
          type="range"
          min="0"
          max="10000"
          value={this.props.amount}
          onChange={e => this.handleChange}
        />
      </div>
    );
  }
}

export default Slider;
