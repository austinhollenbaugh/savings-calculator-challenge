import React, { Component } from "react";
import "../styles/Sidebar.css";

class Sidebar extends Component {
  renderElements(inputArray) {
    return inputArray.map(input => input)
  }

  render() {
    return (
      <div className="Sidebar">
        {this.renderElements(this.props.inputs)}
      </div>
    );
  }
}

export default Sidebar;
