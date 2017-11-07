import React, { Component } from 'react';
//import LineChart from 'react-linechart';
import {Line} from 'react-chartjs-2';

class FireGraph extends Component {
  constructor() {
    super();
    
  }

  render() {
    var labels = [];
    var items = [];
    var input = [];
    for (var key in this.props.data[0]) {
      input.push(key);
    };
    var granularity = input[0];
    var count = input[1];
    this.props.data.map(function(item) {

      var str = item[granularity].split('T')[0];
      labels.push(str) ;
      items.push(item[count]);
    });
    //console.log(labels);
    //console.log(items);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Fire Incidents',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(220,158,170,0.4)',
          borderColor: 'rgba(220,158,170,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(220,158,170,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba(220,158,170,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,

          data: items
        }
      ]
    };
    var options = {
      scales: {
        yAxes: [{
          display: true,
        
          scaleLabel: {
            display: true,
            labelString: 'Number of Incidents'
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
     <div style= {{'height': '500px', 'width': '500px', 'margin': '20px'}}>
       <Line data={data} 
              width={200}
              height={200}
              options={options}/>
      </div>
    );
  }
}


export default FireGraph;


/*
<LineChart
          xLabel={"Dates"}
          yLabel={"Latency"}
          interpolate={"linear"}
          width={500}
          height={400}
          data={[
            {
              color: "steelblue",
              points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}]
            }
          ]}
        />

*/