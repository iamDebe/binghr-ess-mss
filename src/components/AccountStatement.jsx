import { styled } from 'goober';
import React from 'react'

const AccountStatement = () => {
  return (
    <Wrapper>
         <table className="table">
                {/* <thead>
                    <tr>
                        <td>Allowances</td>
                        <td>Amount</td>
                    </tr>
                </thead> */}
            <tbody>
                <tr>
                    <td>Allowances</td>
                    <td>Amount</td>
                </tr>
                <tr>
                    <td>Hours Worked</td>
                    <td>100,000</td>
                </tr>
                <tr>
                    <td>PTO</td>
                    <td>700,000</td>
                </tr>
                <tr>
                    <td>Federal Tax</td>
                    <td>30,000</td>
                </tr>
                <tr>
                    <td>Meal Allowance</td>
                    <td>500,000</td>
                </tr>
                <tr>
                    <td>Net Pay</td>
                    <td>30,000</td>
                </tr>
                <tr>
                    <td>Sub total</td>
                    <td>500,000</td>
                </tr>
               
            </tbody>
        </table>
    </Wrapper>
  )
}

export default AccountStatement;

const Wrapper = styled("div")`
    padding: 0.5rem .8rem;
    border-radius: .4rem;
    margin-top: 1rem;

    tr{
        font-size: 12px;
    }


    td{
        padding: .5rem 1rem;

    }

    tr:nth-child(odd){
        background-color: #F9FAFB;

    }

`