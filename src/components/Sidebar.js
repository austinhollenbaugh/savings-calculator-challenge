import React, { Component } from "react";
import CustomerInput from "./CustomerInput";

class Sidebar extends Component {

  renderInputComponents(values) { // rename this as well
    const options = [
      {
        text: 'Starting Amount',
        type: "$",
        min: 0,
        max: 10000
      },
      {
        text: 'Save Each Month',
        type: "$",
        min: 0,
        max: 1000
      },
      {
        text: 'Years to Save',
        type: "num",
        min: 0,
        max: 50
      },
      {
        text: 'Interest Rate',
        type: "%",
        min: 0,
        max: 20
      }
    ];
    return values.map((val, i) => {
      return (
        <CustomerInput
          val={val}
          onChange={e => this.props.onChange(i, e)}
          key={options[i].text}
          options={options[i]}
        />
      )
    })
  }

  render() {
    return (
      <div className="Sidebar">
        {this.renderInputComponents(this.props.values)}
      </div>
    );
  }
}

export default Sidebar;
