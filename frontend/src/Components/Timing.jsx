// import React, { Component } from 'react';
// import Chart from 'react-apexcharts'

// class Donut extends Component {

//     constructor(props) {
//       super(props);
  
//       this.state = {
//         options: {},
//         series: [44, 55],
//         labels: ['A', 'B']
//       }
//     }
  
//     render() {
  
//       return (
//         <div className="donut">
//           <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//         </div>
//       );
//     }
//   }
  
//   export default Donut;

import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Donut = () => {
  const [donutState, setDonutState] = useState({
    options: {},
    series: [44, 55],
    chartOptions: {
      labels: ['A', 'B']
    }
  });

  return (
    <div className="donut">
      <Chart 
        options={donutState.options} 
        series={donutState.series} 
        type="donut" 
        width="380" 
      />
    </div>
  );
};

export default Donut;
