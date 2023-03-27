import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "goober";
import { Chart, Doughnut } from "react-chartjs-2";
import { employeeDataTaxes } from "../../../data/db";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const DoughnutChartTaxes = () => {
  const data = {
    labels: [],
    datasets: [{
      label: 'Year-To-Date',
      data: employeeDataTaxes.map((data)=>data.userGain),
      backgroundColor: [
          '#E0E0E0',
          '#DF8600',
      ],
      borderColor: [],
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
        ctx.fillText('20%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
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
          <label>Taxes</label><br />
          <small>$300,000</small>
        </div>
     </Container>
     );
}
 
export default DoughnutChartTaxes;

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