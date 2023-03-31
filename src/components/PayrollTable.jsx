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
        <div className='logo-wrapper'>
            <img src="/images/barter.svg" alt="" />
            <h4 className='type-title2'>Payroll Statement</h4>
            <h5 className='type-title3'>Feb 2023</h5>
        </div>
        <EmployeeAcctDetailWrapper>
            <EmployeeAcctDetail>
                <label className='type-title4'>Employee Name: <span>Bamgboye Pelumi</span></label>
                <label className='keys type-title4'>Bank Name: <span>Zenith Bank</span></label>
                <label className='keys type-title4'>Employee ID: <span>HR01</span></label>
            </EmployeeAcctDetail>
            <EmployeeAcctDetail>
                <label className='type-title4'>Department:  <span>Human  Resource</span></label>
                <label className='type-title4'>Location: <span>Lagos</span></label>
                <label className='type-title4'>Account Number: <span>2020****93</span></label>
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
                    icon={<EmailIcon  className="input-icon icon"/>}
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
                    rightIcon={<PrintIcon fill='var(--lilac-400)' />}
                   
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
    padding: 24px 4px;
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
    padding: 0.5rem .7rem;
    border-radius: .4rem;
    width: 100%;
    

   
`;
const EmployeeAcctDetail = styled("div")`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    margin: .5rem 0rem;
    
   
    span{
        color: #BBBEC3;
    }

   
`;
const AccountStatementWrapper = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 2rem;
    
    ${mobile}{
        flex-wrap: wrap;
    }
`;
const Container = styled("div")`
    display: flex;
    justify-content: space-between;
`;
const EmailWrapper = styled("div")`
    width: 40%;
    margin-top: 2rem;
`;

