import React, {useEffect, useState } from "react";
import EssLayout from "@/components/EssLayout";
import SearchField from "@/components/forms/SearchField";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyPay = () => {
  const snapshot = useSnapshot(store);
  const payrolls= snapshot.payrolls?.data;
  const [showPayroll, setShowPayroll] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showAccountStatement, setShowAccountStatement] = useState(false);
  const [payrollLists, setpayrollLists] = useState(null);

  useEffect(() => {
    store.getMyPay();
  }, []);

  const handleShowPayrollStatement = () => {
    setShowPayroll(!showPayroll);
    setShowAccountStatement(false);
  };

  const handlePayrollLists = async () => {
    if (!startDate) {
        toast.error("Please pick a start date");
        return;
    }
    if (!endDate) {
        toast.error("Please pick a start date");
        return;
    }
    const response = await store.getPayrollList(startDate, endDate);
    if (response?.status === "success" && response.data.length) {
      setpayrollLists(response.data);
      setShowAccountStatement(false);
    } else {
      toast.error("No payroll found for the date range");
    }
  };

  const handleDateChange = (event) => {
    const { id, value } = event.target;
    const dates = { startDate, endDate };
    dates[id] = value;
  
    // Swap start and end dates if necessary
    if (dates.startDate && dates.endDate && dates.startDate > dates.endDate) {
      [dates.startDate, dates.endDate] = [dates.endDate, dates.startDate];
    }
  
    // Update the state with the new dates
    
    setStartDate(dates.startDate);
    setEndDate(dates.endDate);
  };  

  const handleAccoundStatement = (item) => {
    console.log(item);
    setShowAccountStatement(true);
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
                id="startDate"
                label="Start Date"
                type="date"
                value={startDate}
                onChange={handleDateChange}
                placeholder="Select start date"
                marginbottom="0"
                icon={<CalenderIcon className="input-icon icon" />}
                className="field-flex-basis"
              />
              <TextField 
                id="endDate"
                label="End Date"
                type="date"
                value={endDate}
                onChange={handleDateChange}
                placeholder="Select end date"
                marginbottom="0"
                icon={<CalenderIcon className="input-icon icon" />}
                className="field-flex-basis"
              />
              <Button  
                type="button"
                onClick={handlePayrollLists}
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
          <PayrollList>
            {payrollLists && payrollLists.map(item => 
              <li onClick={() => handleAccoundStatement(item)} key={item.id}>
                Payroll Id {item.id}
              </li>
            )}
            {showAccountStatement && 
            <PayrollTableWrapper>
              <PayrollTable />
            </PayrollTableWrapper>
          }
          </PayrollList>
          
        </ChartAndPayrollWrapper>
      </FlexColumnWrapper>
      <ToastContainer />
    </EssLayout>
  );    
}
 
export default MyPay;

const FlexColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const PayrollList = styled('div')`
  display: block;
  li {
    cursor: pointer;
    color: var(--red-400);
    margin-bottom: 10px;
  }
`

