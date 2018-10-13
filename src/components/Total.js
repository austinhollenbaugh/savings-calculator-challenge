import React, { Component } from "react";

class Total extends Component {
  render() {
    const { amount, text } = this.props;
    return (
      <div className="Total">
        <div className="total-amount">${amount}</div>
        <div className="total-title">{text}</div>
      </div>
    );
  }
}

export default Total;
