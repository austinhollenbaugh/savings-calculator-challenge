import React, { Component } from "react";
import CustomerInput from "./CustomerInput";
import "../styles/Sidebar.css";

class Sidebar extends Component {

  renderInputComponents(valuesArray) { // rename this as well
    const options = [
      {
        text: 'Starting Amount',
        min: 0,
        max: 100000
      },
      {
        text: 'Save Each Month',
        min: 0,
        max: 5000
      },
      {
        text: 'Years to Save',
        min: 0,
        max: 50
      },
      {
        text: 'Interest Rate',
        min: 0,
        max: 100
      }
    ];
    return valuesArray.map((val, i) => {
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
        {this.renderInputComponents(this.props.inputValues)}
      </div>
    );
  }
}

export default Sidebar;
