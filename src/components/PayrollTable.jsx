import React from 'react';
import {styled} from "goober";
import AccountStatement from './AccountStatement';
import TextField from './forms/TextField';
import Button from './button';
import { ReactComponent as ChartIcon } from "@/assets/images/chart.svg";

const PayrollTable = () => {
    const paymentData = [
        {
            title: "Pension",
            value: 100000
        },
        {
            title: "State Tax",
            value: 700000
        },
        {
            title: "Federal Tax",
            value: 30000
        },
    ]
    const paymentData2 = [
        {
            title: "Hours Worked",
            value: 100000
        },
        {
            title: "PTO",
            value: 700000
        },
        {
            title: "Federal Tax",
            value: 30000
        },
        {
            title: "Meal Allowance",
            value: 500000
        },
        {
            title: "Net Pay",
            value: 30000
        },
    ]
  return (
    <Wrapper>
        <div>
            <img src="/images/barter.svg" alt="" />
            <h4>Payroll Statement</h4>
            <h5>Feb 2023</h5>
        </div>
        <EmployeeAcctDetailWrapper>
            <EmployeeAcctDetail>
                <label className=''>Employee Name: <span>Bamgboye Pelumi</span></label>
                <label className='keys'>Bank Name: <span>Zenith Bank</span></label>
                <label className='keys'>Employee ID: <span>HR01</span></label>
            </EmployeeAcctDetail>
            <EmployeeAcctDetail>
                <label className=''>Department:  <span>Human  Resource</span></label>
                <label className=''>Location: <span>Lagos</span></label>
                <label className=''>Account Number: <span>2020****93</span></label>
            </EmployeeAcctDetail>
        </EmployeeAcctDetailWrapper>
        <AccountStatementWrapper>
            <AccountStatement paymentData={paymentData2} />
            <AccountStatement  paymentData={paymentData}/> 
        </AccountStatementWrapper>
        <Container>
            <EmailWrapper>
                <TextField 
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter Email"
                />
                <Button  
                    type="button"
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    className="submit-button"
                >
                    Send Copy To Email
                </Button>
                <Button  
                    type="button"
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    className="submit-button"
                    margin="1.5rem 0rem"
                    padding="0.625rem"
                    border="var(--lilac-400)"
                   
                >
                    Print Statement 
                </Button>
                
            </EmailWrapper>
            <AccountStatementWrapper>
                <AccountStatement paymentData={paymentData} /> 
            </AccountStatementWrapper>
        </Container>
    </Wrapper>
  )
}

export default PayrollTable;

const Wrapper = styled("div")`
    img{
        margin: 0 auto;
    }
    h4,h5{
        text-align: center;
        margin: .6rem 0rem;
    }
    h4{
        font-size: 18px;
        color: var(--grey-400);
    }
    h5{
        color: var(--grey-300);

    }
`;
const EmployeeAcctDetailWrapper = styled("div")`
    background-color: #F9FAFB;
    padding: 0.5rem .8rem;
    border-radius: .4rem;
    width: 100%;
`;
const EmployeeAcctDetail = styled("div")`
    width: 100%;
    display: flex;
    justify-content: space-between;
    label{
        font-size: 12px;
        margin: .3rem 0rem;
    }
    span{
        color: #BBBEC3;
    }
`;
const AccountStatementWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;
const Container = styled("div")`
    display: flex;
    justify-content: space-between;
`;
const EmailWrapper = styled("div")`
    width: 40%;
    margin-top: 2rem;
`;

