import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "goober";
import { Chart, Doughnut } from "react-chartjs-2";
import { employeeDataYear } from "../../../data/db";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChartYear = () => {
  const data = {
    labels: [],
    datasets: [{
      label: 'Year-To-Date',
      data: employeeDataYear.map((data)=>data.userGain),
      backgroundColor: [
          '#E0E0E0',
          '#0CA484',
      ],
      borderColor: [
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
  };
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const {ctx, data} = chart;

      ctx.save();
      ctx.font = 'bold 12px Circular Std';
      ctx.fillColor = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('60%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  }
  }
    return ( 
        <Wrapper> 
            <Doughnut 
                data={data}
                height={400}
                plugins={[textCenter]}
            />
        </Wrapper>
     );
}
 
export default DoughnutChartYear;

const Wrapper = styled("div")`
  width: 80%;
  margin: 0 auto;
`