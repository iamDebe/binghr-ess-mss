import React from 'react';
import {styled} from "goober";
import AccountStatement from './AccountStatement';
import TextField from './forms/TextField';
import Button from './button';

const PayrollTable = () => {
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
                <label className='keys'>Employee ID: <span>HR01</span></label>
                <label className='keys'>Bank Name: <span>Zenith Bank</span></label>
            </EmployeeAcctDetail>
           
            <EmployeeAcctDetail>
                <label className=''>Department:  <span>Human  Resource</span></label>
                <label className='keys'>Location: <span>Lagos</span></label>
                <label className='keys'>Account Number: <span>2020****93</span></label>
            </EmployeeAcctDetail>
        </EmployeeAcctDetailWrapper>
        <AccountStatementWrapper>
            <AccountStatement />   
            <AccountStatement />   
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
                    padding="0.625rem 3rem"
                    border="var(--lilac-400)"
                >
                    Print Statement
                </Button>
            </EmailWrapper>
            
            <AccountStatement /> 
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

`;

const EmployeeAcctDetailWrapper = styled("div")`
    background-color: #F9FAFB;
    padding: 0.5rem .8rem;
    border-radius: .4rem;

`;

const EmployeeAcctDetail = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: 15px;

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
`;

const Container = styled("div")`
    display: flex;
`;

const EmailWrapper = styled("div")`
    width: 50%;
    margin-top: .7rem;
`;

