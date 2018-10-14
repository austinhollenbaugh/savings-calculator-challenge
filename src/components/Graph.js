import React, { Component } from "react";
import Chart from "chart.js";

class Graph extends Component {
  // I guess I'm kind of partial to my little for loop? Is it good to do it that way just for simplicity? Or is this faster and better?
  xAxisScale(years) {
    return Array.from(Array(years + 1).keys());
  }

  fitCanvasToContainer(canvas) {
    console.log("resizing canvas");
    canvas.width = canvas.parentNode.clientWidth;
    canvas.height = canvas.parentNode.clientHeight;
    // this is a bit of a hack to get the canvas to resize according to its parent
    // gets the exact pixels and resets those values on the canvas html dom element, since it can't be percentages in html
    // need to check on whether i need to set these refs w/ createRef in a constructor, although I've seen multiple examples where people aren't doing that
  }

  componentDidUpdate(prevProps) {
    const { chart, xAxisScale, props } = this;
    const { inputVals, savings, withoutInterest } = props;

    if (prevProps.inputVals !== inputVals) {
      chart.data.labels = xAxisScale(inputVals[2]);
      chart.data.datasets[0].data = savings;
      chart.data.datasets[1].data = withoutInterest;
      chart.update();
    }
    // i did see some options where the chart resizes when the page resizes. how do i check for that.
  }

  componentDidMount() {
    const { canvas, xAxisScale, fitCanvasToContainer, props } = this;
    const { inputVals, savings, withoutInterest } = props;
    // window.addEventListener("resize", resizeCanvas(canvas, canvasParent));
    // if i use this i need to remove the listener in a didunmount method
    fitCanvasToContainer(canvas);

    this.chart = new Chart(canvas, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: xAxisScale(inputVals[2]), // along the bottom
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
            // backgroundColor: ""
            lineTension: 0,
            data: withoutInterest
          }
        ]
      },

      // Configuration options go here
      options: {
        responsive: true, // i don't think this is doing anything?
        // onResize: (chart, size) => {
        //   console.log(chart, size);
        //   chart.canvas.width = size.width;
        //   chart.canvas.height = size.height;
        // },
        legend: {
          usePointStyle: true,
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
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return "$" + value; // change this to use the readable nums?
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
        }
      }
    });
  }

  render() {
    return (
      <div className="Graph">
        {/* i want this canvas to fill up the outer container size */}
        <canvas ref={node => (this.canvas = node)} />
      </div>
    );
  }
}

export default Graph;
