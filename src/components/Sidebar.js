import React, { Component } from "react";
import InputWrapper from "./InputWrapper";

class Sidebar extends Component {
  renderInputs(values) {
    // should i move this up and pass it down as props? Or leave it here to get it out of the way?
    const options = [
      {
        text: "Starting Amount",
        type: "$",
        min: 0,
        max: 10000
      },
      {
        text: "Save Each Month",
        type: "$",
        min: 0,
        max: 1000
      },
      {
        text: "Years to Save",
        type: "num",
        min: 0,
        max: 50
      },
      {
        text: "Interest Rate",
        type: "%",
        min: 0,
        max: 20
      }
    ];
    return values.map((val, i) => {
      return (
        <InputWrapper
          val={val}
          onChange={e => this.props.onChange(i, e)}
          key={options[i].text}
          options={options[i]}
        />
      );
    });
  }

  render() {
    return (
      <div className="Sidebar">{this.renderInputs(this.props.inputVals)}</div>
    );
  }
}

export default Sidebar;
