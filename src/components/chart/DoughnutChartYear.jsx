import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "goober";
import { Chart, Doughnut } from "react-chartjs-2";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)
const employeeDataYear = [
  {
      id: 1,
      year: 2016,
      userGain: 50,
      cumm: '2,000,000',
      
  },
  {
      id: 2,
      year: 2017,
      userGain: 50,
      cumm: '2,000,000',
      
  },
 
]

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
      <Container>
        <Wrapper> 
            <Doughnut 
                data={data}
                height={400}
                plugins={[textCenter]}
            />
        </Wrapper>
         <div>
         <label className="type-body3">Year</label><br />
         <small className="type-subtitle1">$300,000</small>
        </div>
     </Container>
     );
}
 
export default DoughnutChartYear;

const Wrapper = styled("div")`
  width: 50%;
  margin: 0 auto;
`;
const Container = styled("div")`
    display: flex;
    div{
      align-self: center;
      margin-left: .3rem;
    }
    small{
      color: var(--grey-300);
    }
    label{
      font-size: 14px;
      color: var(--grey-400);
    }
`;