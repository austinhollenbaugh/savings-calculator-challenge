import React, { Component } from "react";
import Total from "./Total";

class Totals extends Component {
  render() {
    return (
      <div className="Totals">
        {/* loop through these to display */}
        <Total />
        <Total />
      </div>
    );
  }
}

export default Totals;
