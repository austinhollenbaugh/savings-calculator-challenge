import React, { Component } from "react";

class Total extends Component {
  // this will take props for the amount and the title
  render() {
    return (
      <div className="Total">
        <div>{this.props.amount}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default Total;
