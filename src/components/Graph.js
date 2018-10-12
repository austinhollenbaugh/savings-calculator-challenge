import React, { Component } from "react";
import Chart from 'chart.js';

class Graph extends Component {
  scale(years) {
    let ticks = [];
    for (let i = 0; i <= years; i++) {
      ticks.push(i);
    }
    return ticks;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.values !== this.props.values) {
      this.chart.data.labels = this.scale(this.props.values[2]);
      this.chart.data.datasets[0].data = this.props.savings;
      this.chart.data.datasets[1].data = this.props.withoutInterest;
      this.chart.update(0) // 0 avoids animation and updates synchronously
    }
  }

  componentDidMount() {
    this.chart = new Chart(this.node, {
      type: "line",
      data: {
        labels: this.scale(this.props.values[2]), // along the bottom
        datasets: [
          {
            label: "Savings",
            lineTension: 0,
            data: this.props.savings // points to plot
          },
          {
            label: "Without Interest",
            lineTension: 0,
            data: this.props.withoutInterest
          }
        ],
      }
    });
  }
  render() {
    return (
      <div className="Graph">
        <header className="chart-wrapper">
          <canvas ref={node => (this.node = node)}></canvas>
        </header>
      </div>
    );
  }
}

export default Graph;
