import React, {useState } from "react";
import EssLayout from "@/components/EssLayout";
import SearchField from "@/components/forms/SearchField";
import Button from "@/components/button"
import DoughnutChart from "@/components/chart/DoughnutChart";
import TextField from "@/components/forms/TextField";
import PayrollTable from "@/components/PayrollTable";
import DoughnutChartYear from "@/components/chart/DoughnutChartYear";
import DoughnutChartTaxes from "@/components/chart/DoughnutChartTaxes";
import DoughnutChartBenefit from "@/components/chart/DoughnutChartBenefit";
import DoughnutChartPensions from "@/components/chart/DoughnutChartPensions";
import { ReactComponent as CalenderIcon } from "@/assets/images/calendar.svg";
import { ButtonWrapper,
    ChartAndPayrollWrapper,
    ChartWrapper,
    SecondaryChartsWrapper,
    PayrollTableWrapper
} from "@/components/MyPayCommonStyles";
import { styled } from "goober";

const MyPay = () => {
    const [showProfileSettings, setShowProfileSettings] = useState(false);
    const [showPayroll, setShowPayroll] = useState(false);
    const [showAccountStatement, setShowAccountStatement] = useState(false);
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
    );    
};
 
export default MyPay;

const FlexColumnWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;
