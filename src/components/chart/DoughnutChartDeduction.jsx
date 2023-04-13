import { registerChart } from "@/utils/registerChart";
import { styled } from "goober";
import { Doughnut } from "react-chartjs-2";
import { calculateTotalDeductions, calculatPercentage } from "@/utils/helpers";

registerChart();

const DoughnutChartDeduction = ({ payrolls }) => {
  const data = {
    datasets: [{
      data: [calculateTotalDeductions(payrolls), payrolls.total],
      backgroundColor: [
        '#C4C4C4',
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
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {ctx, data} = chart;

      ctx.save();
      ctx.font = 'bold 12px Circular Std';
      ctx.fillColor = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      //To:DO: Calculate percentage
      ctx.fillText(calculatPercentage(payrolls, calculateTotalDeductions(payrolls)), chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }

  return ( 
    <Container style={{marginTop: '10px'}}>
      <Wrapper> 
        <Doughnut 
          data={data}
          height={400}
          options={options}
          plugins={[textCenter]}
        />
      </Wrapper>
        <div>
        <label className="type-body3">Deductions</label><br />
        {/* To:Do: please update the currency from employmentProperties */}
        <small className="type-subtitle1">{calculateTotalDeductions(payrolls).toLocaleString()}</small>
      </div>
    </Container>
  );
}
 
export default DoughnutChartDeduction;

export const Wrapper = styled("div")`
  width: 50%;
`;
export const Container = styled("div")`
  display: flex;
  gap: 10px;
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
