import React, { Component } from "react";

class Total extends Component {
  render() {
    return (
      <div className="Total">
        <div>${this.props.amount}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default Total;
