import React, {useEffect, useState } from "react";
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button"
import DoughnutChart from "@/components/chart/DoughnutChart";
import TextField from "@/components/forms/TextField";
import PayrollTable from "@/components/PayrollTable";
import DoughnutChartGross from "@/components/chart/DoughnutChartGross";
import DoughnutChartTaxes from "@/components/chart/DoughnutChartTaxes";
import DoughnutChartNet from "@/components/chart/DoughnutChartNet";
import DoughnutChartDeduction from "@/components/chart/DoughnutChartDeduction";
import { ReactComponent as CalenderIcon } from "@/assets/images/calendar.svg";
import { ButtonWrapper,
  ChartAndPayrollWrapper,
  ChartWrapper,
  SecondaryChartsWrapper,
  PayrollTableWrapper
} from "@/components/MyPayCommonStyles";
import { styled } from "goober";
import { useSnapshot } from "valtio";
import store from "@/services/store";

const MyPay = () => {
  const snapshot = useSnapshot(store);
  const payrolls= snapshot.payrolls?.data;
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [showPayroll, setShowPayroll] = useState(false);
  const [showAccountStatement, setShowAccountStatement] = useState(false);

  useEffect(() => {
    store.getMyPay();
  }, []);

  const handleShowPayrollStatement = ()=>{
    setShowPayroll(!showPayroll);
    setShowAccountStatement(false);
  }
  const handleShowAccountStatement = ()=>{
    setShowAccountStatement(!showAccountStatement);
  }

  return (
    <EssLayout>
      <FlexColumnWrapper>
        <ButtonWrapper>
          <Button  
            type="button"
            onClick={handleShowPayrollStatement}
            bg="var(--lilac-400)"
            textcolor="var(--grey-25)"
            width="11.75rem"
          >
            View Payroll Statement
          </Button>
          {showPayroll &&
            <div className="payroll-search">
              <TextField 
                id="selectMonth"
                label="Year / Month"
                type="date"
                placeholder="Select Month/Year"
                marginbottom="0"
                icon={<CalenderIcon className="input-icon icon" />}
                className="field-flex-basis"
              />
              <Button  
                type="button"
                onClick={handleShowAccountStatement}
                bg="var(--white)"
                textcolor="var(--lilac-400)"
                border="var(--lilac-400)"
                className="btn-flex-basis"
              >
                Enter
              </Button>
            </div>
          }
        </ButtonWrapper>
        <ChartAndPayrollWrapper>
          <ChartWrapper>
            {payrolls ? (
              <>
                <DoughnutChart payrolls={payrolls} />
                <SecondaryChartsWrapper>
                  <DoughnutChartGross payrolls={payrolls} />
                  <DoughnutChartNet payrolls={payrolls} />
                  <DoughnutChartTaxes payrolls={payrolls} />
                  <DoughnutChartDeduction payrolls={payrolls} />
                </SecondaryChartsWrapper>
              </>
            ) : (
              <p>No result</p>
            )}
          </ChartWrapper>
            {showAccountStatement && 
              <PayrollTableWrapper>
                <PayrollTable />
              </PayrollTableWrapper>
            }
        </ChartAndPayrollWrapper>
      </FlexColumnWrapper>
    </EssLayout>
  );    
}
 
export default MyPay;

const FlexColumnWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;
