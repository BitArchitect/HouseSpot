import React, {Component} from 'react';
import Prediction from './components/prediction.jsx';
import HouseGraph from './components/houseGraph.jsx';
import CrimeGraph from './components/crimeGraph.jsx';
import FireGraph from './components/fireGraph.jsx';
import HealthGraph from './components/healthGraph.jsx';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      granularity: '',
      fromDate: '',
      toDate:'',
      zipcode:'',
      crimeData: [{"month":"2016-07-01T00:00:00.000Z","count":"664"},{"month":"2016-08-01T00:00:00.000Z","count":"740"},{"month":"2016-09-01T00:00:00.000Z","count":"785"},{"month":"2016-10-01T00:00:00.000Z","count":"829"},{"month":"2016-11-01T00:00:00.000Z","count":"716"},{"month":"2016-12-01T00:00:00.000Z","count":"728"},{"month":"2017-01-01T00:00:00.000Z","count":"705"},{"month":"2017-02-01T00:00:00.000Z","count":"688"},{"month":"2017-03-01T00:00:00.000Z","count":"884"}],
      fireData: [{"week":"2017-07-31T00:00:00.000Z","sum":"21"},{"week":"2017-08-07T00:00:00.000Z","sum":"77"},{"week":"2017-08-14T00:00:00.000Z","sum":"35"},{"week":"2017-08-21T00:00:00.000Z","sum":"62"},{"week":"2017-08-28T00:00:00.000Z","sum":"76"},{"week":"2017-09-04T00:00:00.000Z","sum":"48"},{"week":"2017-09-11T00:00:00.000Z","sum":"46"},{"week":"2017-09-18T00:00:00.000Z","sum":"45"},{"week":"2017-09-25T00:00:00.000Z","sum":"47"},{"week":"2017-10-02T00:00:00.000Z","sum":"37"},{"week":"2017-10-09T00:00:00.000Z","sum":"39"},{"week":"2017-10-16T00:00:00.000Z","sum":"54"},{"week":"2017-10-23T00:00:00.000Z","sum":"17"},{"week":"2017-10-30T00:00:00.000Z","sum":"4"}],
      healthData: [{"week":"2017-08-07T00:00:00.000Z","high":"3","moderate":"4","low":"4"},{"week":"2017-08-14T00:00:00.000Z","high":"5","moderate":"7","low":"7"},{"week":"2017-08-21T00:00:00.000Z","high":"2","moderate":"4","low":"5"},{"week":"2017-08-28T00:00:00.000Z","high":"9","moderate":"10","low":"22"},{"week":"2017-09-04T00:00:00.000Z","high":"3","moderate":"6","low":"6"},{"week":"2017-09-11T00:00:00.000Z","high":"5","moderate":"10","low":"14"},{"week":"2017-09-18T00:00:00.000Z","high":"3","moderate":"12","low":"17"},{"week":"2017-09-25T00:00:00.000Z","high":"5","moderate":"9","low":"15"},{"week":"2017-10-02T00:00:00.000Z","high":"5","moderate":"8","low":"14"},{"week":"2017-10-09T00:00:00.000Z","high":"2","moderate":"4","low":"16"},{"week":"2017-10-16T00:00:00.000Z","high":"3","moderate":"10","low":"17"},{"week":"2017-10-23T00:00:00.000Z","high":"5","moderate":"11","low":"19"}],
      houseData: [
        [
          {x: 1, y: 20},
          {x: 5, y: 25},
          {x: 10, y: 30}
        ]
      ],
      prediction: null
    };
    this.handleGran = this.handleGran.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount() {
  //   fetch('/', {qs: {zipcode:  }})
  //   .then(response => {

  //   })
  // }
  componentDidMount = () => {
    this.fetchDefault();
    
  }

  // getDataFromServices() {
  //   fetch('/', {qs: {zipcode:  }})
  //   .then(response => {

  //   })
  // }
  fetchDefault = () => {
    $.ajax({
      url: '/', 
      success: (data) => {
        console.log('getting data');
       
        // this.setState({
        //   items: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
      
  }
  handleZip(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  handleFrom(e) {
    this.setState({
      fromDate: e.target.value
    });
  }
  handleTo(e) {
    this.setState({
      toDate: e.target.value
    });
  }
  handleGran(gran) {
    this.setState({
      granularity: gran
    });
  }

  handleSubmit() {
    console.log('wanna submit');
    this.fetchDefault();
  }

  render() {
    console.log(this.state.granularity, this.state.zipcode, this.state.fromDate, this.state.toDate);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HouseSpot - House Value Property Predictor</h1>
        </header>
        <p className="App-intro">
          <div style={{'marginTop': '10px'}}> Please enter a zipcode: <input id='zipcode' type='text' placeholder='94102' onChange={this.handleZip}></input> </div>
          <div style={{'marginTop': '10px'}}>
            From Date: <input type='text' placeholder='YYYY-MM-DD' onChange={this.handleFrom}></input> To Date <input id='zipcode' type='text' placeholder='YYYY-MM-DD' onChange={this.handleTo}></input>
          </div>
          <div style={{'marginTop': '10px'}}>
            Granularity 
              <input type="radio" id="Gran1" name="gran" value="day" onClick={() => this.handleGran('day')}></input>
              <label for="Gran1">Day</label>

              <input type="radio" id="Gran2" name="gran" value="week" onClick={() => this.handleGran('week')}></input>
              <label for="Gran2">Week</label>

              <input type="radio" id="Gran3" name="gran" value="month" onClick={() => this.handleGran('month')}></input>
              <label for="Gran3">Month</label>
              
          </div>
          <div style={{'marginTop': '10px'}}><button type="button" onClick={this.handleSubmit}>Click Me!</button></div>
        </p>
        <Prediction />
        <HouseGraph data={this.state.houseData}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CrimeGraph data={this.state.crimeData}/>
          <FireGraph data={this.state.fireData}/>
          <HealthGraph data={this.state.healthData}/>
        </div>
      </div>
    );
  }
}


export default App;
