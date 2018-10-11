import React, { Component } from "react";
// import "../styles/Totals.css";

class Total extends Component {
  // this will take props for the amount and the title
  render() {
    return (
      <div className="Total">
        <div>$100000</div>
        <div>Total Amount Saved</div>
      </div>
    );
  }
}

export default Total;
