import { registerChart } from "@/utils/registerChart";
import { styled } from "goober";
import { Doughnut } from "react-chartjs-2";
import { calculateNet, calculatPercentage } from "@/utils/helpers";

registerChart();

const DoughnutChartNet = ({ payrolls }) => {
  const data = {
    datasets: [{
      data: [calculateNet(payrolls), payrolls.total],
      backgroundColor: [
        '#DF8600',
        '#E0E0E0',
      ],
      borderColor: [
      ],
      borderWidth: 0
    }]
  }
 
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    }
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
      //To:DO: Calculate percentage
      ctx.fillText(calculatPercentage(payrolls, calculateNet(payrolls)), chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }

  return ( 
    <Container>
      <Wrapper> 
        <Doughnut 
          data={data}
          height={400}
          options={options}
          plugins={[textCenter]}
        />
      </Wrapper>
        <div>
        <label className="type-body3">Net</label><br />
        {/* To:Do: please update the currency from employmentProperties */}
        <small className="type-subtitle1">{calculateNet(payrolls)?.toLocaleString()}</small>
      </div>
    </Container>
  );
}
 
export default DoughnutChartNet;

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
