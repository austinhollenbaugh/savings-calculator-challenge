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
    const { values, savings, withoutInterest } = this.props;
    const { chart, scale } = this;
    if (prevProps.values !== values) {
      chart.data.labels = scale(values[2]);
      chart.data.datasets[0].data = savings;
      chart.data.datasets[1].data = withoutInterest;
      chart.update()
    }
  }

  componentDidMount() {
    var canvas = document.getElementById("test");
    var parent = document.getElementById("parent");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    // these are working but I want to find a better way to do it

    const { node, scale } = this;
    const { values, savings, withoutInterest } = this.props;

    this.chart = new Chart(node, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: scale(values[2]), // along the bottom
        datasets: [
          {
            label: "Savings",
            borderColor: "#FF7D51",
            pointBackgroundColor: "#FF7D51",
            fill: false,
            lineTension: 0,
            data: savings // points to plot
          },
          {
            label: "Without Interest",
            borderColor: "#3586A2",
            pointBackgroundColor: "#3586A2",
            fill: false,
            // backgroundColor: ""
            lineTension: 0,
            data: withoutInterest
          }
        ]
      },

      // Configuration options go here
      options: {
        legend: {
          usePointStyle: true
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Savings"
            },
            ticks: {
              min: 0,
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  return '$' + value;
              }
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Years"
            },
          }]
        }
      }
    });
  }

  render() {
    return (
      <div className="Graph">
        <header id="parent" className="chart-wrapper">
          <canvas id="test" ref={node => (this.node = node)}></canvas>
        </header>
      </div>
    );
  }
}

export default Graph;
