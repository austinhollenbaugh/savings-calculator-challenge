import React, { Component } from "react";

class Total extends Component {
  prettyDollarAmount(num) {
    return num.toLocaleString([], { style: "currency", currency: "USD" });
  }

  render() {
    const { amount, text } = this.props;
    return (
      <div className="Total">
        <div className="total-amount">{this.prettyDollarAmount(amount)}</div>
        <div className="total-title">{text}</div>
      </div>
    );
  }
}

export default Total;
