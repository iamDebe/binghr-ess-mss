import { registerChart } from "@/utils/registerChart";
import { Doughnut } from "react-chartjs-2";
import { calculateTotalDeductions, calculatPercentage } from "@/utils/helpers";
import {Wrapper, Container} from "@/components/chart/DoughnutChartDeduction";

registerChart();

const DoughnutChartGross = ({ payrolls }) => {
  const data = {
    datasets: [{
      data: [payrolls.total, calculateTotalDeductions(payrolls)],
      backgroundColor: [
        '#0CA484',
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
      ctx.fillText(calculatPercentage(payrolls, payrolls.total), chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
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
        <label className="type-body3">Gross</label><br />
        {/* To:Do: please update the currency from employmentProperties */}
        <small className="type-subtitle1">{payrolls.total.toLocaleString()}</small>
      </div>
    </Container>
  );
}
 
export default DoughnutChartGross;
