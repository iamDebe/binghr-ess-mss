import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "goober";
import { Chart, Doughnut } from "react-chartjs-2";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)
const employeeDataBenefit = [
  {
      id: 1,
      year: 2016,
      userGain: 90,
      cumm: '2,000,000',
      
  },
  {
      id: 2,
      year: 2017,
      userGain: 10,
      cumm: '2,000,000',
      
  },
 
]

const DoughnutChartBenefit = () => {
  const data = {
    labels: [],
    datasets: [{
      label: 'Year-To-Date',
      data: employeeDataBenefit.map((data)=>data.userGain),
      backgroundColor: [
          '#E0E0E0',
          '#EDB200',
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
      ctx.fillText('10%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  }
  }
    return ( 
      <Container>
        <Wrapper> 
            <Doughnut 
                data={data}
                height={400}
                plugins={[textCenter]}
            />
        </Wrapper>
        <div>
            <label>Benefits</label><br />
            <small>$20,000</small>
        </div>
      </ Container>
     );
}
 
export default DoughnutChartBenefit;

const Wrapper = styled("div")`
    width: 50%;
    margin: 0 auto;
`;

const Container = styled("div")`
    display: flex;
    div{
      align-self: center;
    }
    small{
      color: var(--grey-300);
    }
    label{
      font-size: 14px;
      color: var(--grey-400);
    }
`;