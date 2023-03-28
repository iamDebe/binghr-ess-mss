import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "goober";
import { Chart, Doughnut } from "react-chartjs-2";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)
 const employeeData = [
  {
      id: 1,
      year: 2016,
      userGain: 60,
      userLost: 823
  },
  {
      id: 2,
      year: 2017,
      userGain: 20,
      userLost: 825
  },
  {
      id: 3,
      year: 2018,
      userGain: 15,
      userLost: 826
  },
  {
      id: 4,
      year: 2019,
      userGain: 10,
      userLost: 823
  }
]
const DoughnutChart = () => {
  const data = {
    labels: [],
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


  // sliceThickness
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDatasetsDraw(chart, plugins){
      chart.getDatasetMeta(0).data[1].outerRadius = 110
      chart.getDatasetMeta(0).data[2].outerRadius = 110
      chart.getDatasetMeta(0).data[3].outerRadius = 110
    }
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
      }
     
    }
  
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
        <Wrapper> 
            <Doughnut 
                data={data}
                height={400}
                plugins={[textCenter, sliceThickness]}
            />
        </Wrapper>
     );
}
 
export default DoughnutChart;

const Wrapper = styled("div")`
  width: 70%;
  align-self: center;
`;