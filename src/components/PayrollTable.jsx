import React from 'react';
import {styled} from "goober";
import AccountStatement from '@/components/AccountStatement';
import TextField from '@/components/forms/TextField';
import Button from '@/components/button';
import { ReactComponent as PrintIcon } from "@/assets/images/printer.svg";
import { ReactComponent as EmailIcon } from "@/assets/images/sms.svg";
import { mobile } from "@/globalStyle";


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
        <div className="logo-wrapper">
            <img src="/ess/images/barter.svg" alt="company logo" />
            <h4 className="type-title2">Payroll Statement</h4>
            <p className="type-title3">Feb 2023</p>
        </div>
        <EmployeeAcctDetailWrapper>
            <EmployeeAcctDetail>
                <label className='type-title4'>Employee Name: <span>Bamgboye Pelumi</span></label>
                <label className='type-title4'>Bank Name: <span>Zenith Bank</span></label>
                <label className='type-title4'>Employee ID: <span>HR01</span></label>
            </EmployeeAcctDetail>
            <EmployeeAcctDetail>
                <label className='type-title4'>Department:  <span>Human  Resource</span></label>
                <label className='type-title4'>Location: <span>Lagos</span></label>
                <label className='type-title4'>Account Number: <span>2020****93</span></label>
            </EmployeeAcctDetail>
        </EmployeeAcctDetailWrapper>
        <AccountStatementWrapper>
            <AccountStatement paymentData={paymentData2} />
            <AccountStatement paymentData={paymentData}/> 
        </AccountStatementWrapper>
        <Container>
            <EmailWrapper>
                <TextField 
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter Email"
                    icon={<EmailIcon  className="input-icon icon"/>}
                />
                <Button
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    width="10rem"
                >
                    Send Copy To Email
                </Button>
                <Button
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    margin="0.875rem 0 0"
                    border="var(--lilac-400)"
                    width="10rem"
                    rightIcon={<PrintIcon  />}
                    iconcolor="var(--grey-25)"

                >
                    Print Statement 
                </Button>
                
            </EmailWrapper>
            <AccountStatementSingle>
                <AccountStatement paymentData={paymentData} /> 
            </AccountStatementSingle>
        </Container>
    </Wrapper>
  )
}

export default PayrollTable;

const Wrapper = styled("div")`
    padding: 24px 4px;
    .logo-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 13px;
        .type-title2 {
            color: var(--grey-400);
        }
        .type-title3 {
            color: var(--grey-300);
        }
    }
`;
const EmployeeAcctDetailWrapper = styled("div")`
    background-color: var(--grey-50);
    padding: 0.5rem .7rem;
    margin-top: 1.5rem;
    border-radius: var(--br);
    width: 100%;
`;
const EmployeeAcctDetail = styled("div")`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    margin: .5rem 0rem;
    color: #454749;
    span{
        color: var(--grey-300);
    }
`;
const AccountStatementWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: 0.875rem;
    margin-top: 2rem;
    ${mobile}{
        flex-wrap: wrap;
    }
`;
const Container = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: 0.875rem;
    ${mobile}{
        flex-direction: column-reverse;
        flex-wrap: wrap;
    }
`;
const EmailWrapper = styled("div")`
    width: 100%;
    margin-top: 2rem;
    --textfield-width: 90%;
    --textfield-margin-bottom: 1.25rem;
`;
const AccountStatementSingle = styled("div")`
    width: 100%;
    ${mobile} {
        margin-top: 0.875rem;
    }
`;
