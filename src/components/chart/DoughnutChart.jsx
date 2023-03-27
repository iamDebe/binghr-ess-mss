import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";
import { employeeData } from "../../../data/db";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChart = () => {
    // const labels = Utils.months({count: 7});
    // const defaultLegendClickHandler = Chart.defaults.plugins.legend.onClick;
    // const pieDoughnutLegendClickHandler = Chart.controllers.doughnut.overrides.plugins.legend.onClick;
  const data = {
    labels: employeeData.map((data)=>data.year),
    datasets: [{
      label: 'My First Dataset',
      data: employeeData.map((data)=>data.userGain),
      backgroundColor: [
        '#0CA484',
        '#DF8600',
        '#EDB200',
        '#D1D1D2',
        
      ],
      borderColor: [
        '#0CA484',
        '#DF8600',
        '#EDB200',
        '#EDB200'
      ],
      borderWidth: 0
    }]
  }
 
  // config
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      maintenanceAspectRatio: false,
      legend:{
        labels: {
          usePointStyle: true,
          fontSize: 26,
          position: 'right',
          align: 'start'
        }
      },
      plugins:[]
     
    },
    // Plugins: [textCenter]
  
  };

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const {ctx, data} = chart;

      ctx.save();
      ctx.font = 'bold 30px Circular Std';
      ctx.fillColor = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('100%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  }
  }
    return ( 
        <div> 
            <Doughnut 
                data={data}
                height={400}
                plugins={[textCenter]}
                // options={options}
            />
        </div>
     );
}
 
export default DoughnutChart;