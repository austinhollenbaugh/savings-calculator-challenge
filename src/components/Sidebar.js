import React, { Component } from "react";
import CustomerInput from "./CustomerInput";
import "../styles/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        {/* loop through to display these */}
        <CustomerInput text="Starting Amount"/>
        <CustomerInput text="Amount to Save Each Month"/>
        <CustomerInput text="Years to Save"/>
        <CustomerInput text="Interest Rate"/>
      </div>
    );
  }
}

export default Sidebar;
