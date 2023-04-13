import { styled } from "goober";
import { Doughnut } from "react-chartjs-2";
import { registerChart } from "@/utils/registerChart";
import { calculateNet, calculateOtherDeduction, calculateTaxes } from "@/utils/helpers";

registerChart()

const DoughnutChart = ({payrolls}) => {

  const payrollData = [
    ["Gross", "Net", "Taxes", "Additional deduction"],
    [payrolls?.total, calculateNet(payrolls), calculateTaxes(payrolls), calculateOtherDeduction(payrolls)],
  ];
  const data = {
    labels: payrollData[0],
    datasets: [{
      label: "value",
      data: payrollData[1],
      backgroundColor: ['#0CA484','#DF8600','#EDB200','#D1D1D2',
      ],
      borderColor: ['#0CA484','#DF8600','#EDB200','#D1D1D2'],
      borderWidth: 0
    }]
  };

  // sliceThickness
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDatasetsDraw(chart, plugins){
      chart.getDatasetMeta(0).data[1].outerRadius = 110
      chart.getDatasetMeta(0).data[2].outerRadius = 110
      chart.getDatasetMeta(0).data[3].outerRadius = 110
    }
  }
 
  const options = {
    plugins: {
      legend: {
        display: false,
      },
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
        options={options}
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