import React, { Component, createRef } from "react";
import Chart from "chart.js";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.canvas = createRef();
  }

  xAxisScale(years) {
    return Array.from(Array(years + 1).keys());
  }

  fitCanvasToContainer(canvas) {
    canvas.width = canvas.parentNode.clientWidth;
    canvas.height = canvas.parentNode.clientHeight;
    // this is a bit of a hack to get the canvas to resize according to its parent
  }

  componentDidUpdate(prevProps) {
    const { chart, xAxisScale } = this;
    const { inputVals, savings, withoutInterest } = this.props;

    if (prevProps.inputVals !== inputVals) {
      chart.data.labels = xAxisScale(inputVals[2]);
      chart.data.datasets[0].data = savings;
      chart.data.datasets[1].data = withoutInterest;
      chart.update();
    }
  }

  componentDidMount() {
    const { inputVals, savings, withoutInterest } = this.props;

    this.fitCanvasToContainer(this.canvas);

    this.chart = new Chart(this.canvas, {
      type: "line",

      // The data for our dataset
      data: {
        labels: this.xAxisScale(inputVals[2]),
        datasets: [
          {
            label: "With Interest",
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
            lineTension: 0,
            data: withoutInterest
          }
        ]
      },

      // Configuration options go here
      options: {
        legend: {
          labels: {
            boxWidth: 15
          }
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Savings"
              },
              ticks: {
                min: 0,
                callback: function(value, index, values) {
                  return "$" + value;
                }
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Years"
              }
            }
          ]
        },
        tooltips: {
          mode: "index"
        }
      }
    });
  }

  render() {
    return (
      <div className="Graph">
        <canvas ref={node => (this.canvas = node)} />
      </div>
    );
  }
}

export default Graph;
