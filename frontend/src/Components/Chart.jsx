// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class Graph extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Graph;


import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useGetMedicinesMutation } from '../Slices/medicineSlice';
import { useSelector } from "react-redux";

const Graph = () => {
  const [getMedicines] = useGetMedicinesMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const [percentage, setPercentage] = useState('')

  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: []
    }
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: []
    }
  ]);

  useEffect(() => {
    const fetchMedicines = async () => {
        try {
            const res = await getMedicines(userInfo._id).unwrap()
            const sortedSchedules = [...res].sort((a, b) => new Date(b.start) - new Date(a.start));
            
            const monthlyMedicineCount = sortedSchedules.reduce((acc, schedule) => {
              const monthYear = new Date(schedule.start).toISOString().slice(0, 7);
              acc[monthYear] = (acc[monthYear] || 0) + 1;
              return acc;
            }, {});

            const totalMedications = Object.values(monthlyMedicineCount).reduce((sum, count) => sum + count, 0);
            const monthlyMedicinePercentage = Object.entries(monthlyMedicineCount).reduce((acc, [monthYear, count]) => {
              acc[monthYear] = (count / totalMedications) * 100;
              return acc;
            }, {});
            setPercentage(monthlyMedicinePercentage)

            // console.log('Monthly Medicine Percentage:', monthlyMedicinePercentage);
            // console.log('Monthly Medicine Count:', monthlyMedicineCount);

            const categories = Object.keys(monthlyMedicineCount);
            const data = Object.values(monthlyMedicineCount);

            // console.log('Categories:', categories);
            // console.log('Data:', data);

            setOptions({
              ...options,
              xaxis: {
                categories
              }
            });

            setSeries([
              {
                name: "Usage",
                data
              }
            ]);
            
        } catch (error) {
            console.error('Error fetching medicines:', error);
            if (error.status === 403) {
                toast.error('You do not have permission to access your medicines.');
            } else {
                toast.error('Error fetching medicines. Please try again later.');
            }
        }
    }

    fetchMedicines()
}, [getMedicines, userInfo._id])

  return (
    <>
    <div className="mb-5">
      <div className='flex justify-between'>
        <h1 className='text-md font-bold'>Medical Treatment</h1>
        <p className='text-sm text-green-700'>20% High then last month</p>
      </div>
    
      <div className='mt-3 flex justify-between'>
        <div>
          <h1 className='text-sm font-normal'>Overall Months</h1>
          <p className='font-bold'>38.40%</p>
        </div>
        <div>
          <h1 className='text-sm font-normal'>This Month</h1>
          <div>
            {Object.entries(percentage).map(([monthYear, value]) => (
            <p 
              className='font-bold' 
              key={monthYear}>
                {`${value.toFixed(2)}%`}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart 
            options={options} 
            series={series} 
            type="line" 
            width="500" 
            />
        </div>
      </div>
    </div>

    </>
  );
};

export default Graph;
