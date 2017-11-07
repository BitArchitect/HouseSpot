import React, { Component } from 'react';
//import LineChart from 'react-linechart';
import {Line} from 'react-chartjs-2';


class HealthGraph extends Component {
  constructor() {
    super();
  }

  render() {
  	var labels = [];
    var itemsHigh = [];
    var itemsMod = [];
    var itemsLow = [];
    var input = [];
    for (var key in this.props.data[0]) {
      input.push(key);
    };
    var granularity = input[0];

    this.props.data.map(function(item) {
      var str = item[granularity].split('T')[0];
      labels.push(str) ;
      itemsHigh.push(item['high']);
      itemsMod.push(item['moderate']);
      itemsLow.push(item['low']);
    });
    //console.log(labels);
    //console.log(itemsHigh, itemsMod, itemsLow);
  	const data = {
		  labels: labels,
		  datasets: [
		    {
		      label: 'High Risk',
		      fill: false,
		      backgroundColor: 'rgba(255,99,132,0.2)',
		      borderColor: 'rgba(255,99,132,1)',
		      borderWidth: 1,
		      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
		      hoverBorderColor: 'rgba(255,99,132,1)',
		      data: itemsHigh
		    },
		    {
		      label: 'Moderate Risk',
		      fill: false,
		      backgroundColor: 'rgba(84, 125, 170, 0.2)',
		      borderColor: 'rgba(84, 125, 170, 1)',
		      borderWidth: 1,
		      hoverBackgroundColor: 'rgba(84, 125, 170, 0.4)',
		      hoverBorderColor: 'rgba(84, 125, 170, 1)',
		      data: itemsMod
		    },
		    {
		      label: 'Low Risk',
		      fill: false,
		      backgroundColor: 'rgba(63, 170, 134,0.2)',
		      borderColor: 'rgba(63, 170, 134,1)',
		      borderWidth: 1,
		      hoverBackgroundColor: 'rgba(63, 170, 134,0.4)',
		      hoverBorderColor: 'rgba(63, 170, 134,1)',
		      data: itemsLow
		    }
		  ]
		};

		var options = {
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Health Inspection Count'
          },
          ticks: {
        min: 0
    }
        }],
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }]
      },
      maintainAspectRatio: false

    };

    return (
      <div align="center" style= {{'height': '500px', 'width': '500px', 'margin': '20px'}}>
       <Line data={data} 
              width={200}
              height={200}
              options={options}
              />
      </div>
    );
  }
}


export default HealthGraph;
