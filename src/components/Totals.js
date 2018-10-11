import React, { Component } from "react";
import Total from "./Total";

class Totals extends Component {
  render() {
    return (
      <div className="Totals">
        <Total amount={this.props.saved} text="Total Saved"/>
        <Total amount={this.props.interest} text="Interest Earned"/>
      </div>
    );
  }
}

export default Totals;
