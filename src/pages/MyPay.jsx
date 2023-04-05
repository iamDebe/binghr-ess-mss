import React, {useState } from "react";
import EssLayout from "@/components/EssLayout";
import Button from "@/components/button"
import DoughnutChart from "@/components/chart/DoughnutChart";
import TextField from "@/components/forms/TextField";
import PayrollTable from "@/components/PayrollTable";
import DoughnutChartYear from "@/components/chart/DoughnutChartYear";
import DoughnutChartTaxes from "@/components/chart/DoughnutChartTaxes";
import DoughnutChartBenefit from "@/components/chart/DoughnutChartBenefit";
import DoughnutChartPensions from "@/components/chart/DoughnutChartPensions";
import { ReactComponent as CalenderIcon } from "@/assets/images/calendar.svg";
import TopBarWithSearch from "@/components/TopBarWithSearch";
import { ButtonWrapper, 
    ChartAndPayrollWrapper, 
    ChartWrapper, 
    SecondaryChartsWrapper, 
    TextFieldWrapper, 
    PayrollTableWrapper 
} from "@/assets/wrappers/TopBarWithSearchWrapper";
import { styled } from "goober";






const MyPay = () => {
    const [showPayroll, setShowPayroll] = useState(false);
    const [showAccountStatement, setShowAccountStatement] = useState(false);
    const handleShowPayrollStatement = ()=>{
        setShowPayroll(!showPayroll)
        setShowAccountStatement(false)
    }
    const handleShowAccountStatement = ()=>{
        setShowAccountStatement(!showAccountStatement)
      

    }

    return (  
        <>
           <EssLayout>
                <TopBarWithSearch />
                
                <FlexColumnWrapper>
                <ButtonWrapper>
                        <Button  
                            type="button"
                            onClick={handleShowPayrollStatement}
                            bg="var(--lilac-400)"
                            textcolor="var(--grey-25)"
                            className="submit-button"
                            
                        >
                            View Payroll Statement
                        </Button>
                    { showPayroll &&
                        <>
                            <TextFieldWrapper>
                                <TextField 
                                    id="selectMonth"
                                    label="Year/Month"
                                    type="date"
                                    placeholder="Select Month/Year"
                                    icon={<CalenderIcon  className="input-icon icon " />}
                                    className="input"

                                />
                            </TextFieldWrapper>
                            <Button  
                                type="button"
                                onClick={handleShowAccountStatement}
                                bg="var(--white)"
                                textcolor="var(--lilac-400)"
                                className="submit-button"
                                border="var(--lilac-400)"
                                padding=".5rem 1.6rem"
                            >
                                Enter
                            </Button>
                        </>
                        }
                    </ButtonWrapper>
                    <ChartAndPayrollWrapper>
                        <ChartWrapper>
                            <DoughnutChart />
                            <SecondaryChartsWrapper>
                                <DoughnutChartYear />
                                <DoughnutChartTaxes />
                                <DoughnutChartBenefit />
                                <DoughnutChartPensions />
                            </SecondaryChartsWrapper>
                            
                        </ChartWrapper>
                        {showAccountStatement && 
                            <PayrollTableWrapper>
                                <PayrollTable />
                            </PayrollTableWrapper>
                        }
                    </ChartAndPayrollWrapper>
                </FlexColumnWrapper>
                  
           </EssLayout>
        </>
    );
       
}
 
export default MyPay;

const FlexColumnWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;



