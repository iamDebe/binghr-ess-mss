import React from 'react';
import { styled } from 'goober';

const AccountStatement = ({paymentData}) => {
  return (
    <Wrapper>
         <table className="table">
                <thead>
                    <tr>
                        <td className='head type-title3'>Allowances</td>
                        <td className='head type-title3'>Amount</td>
                    </tr>
                </thead>
            <tbody>
                {paymentData.map((data, index)=>(
                    <tr key={index}>
                        <td className='type-body3'>{data.title}</td>
                        <td className='type-body3 value'>{data.value}</td>
                    </tr>
                ))}
                <tr>
                    <td className='subtotal'>Sub total</td>
                    <td className='subtotal-value'>500,000</td>
                </tr>
            </tbody>
        </table>
    </Wrapper>
  )
}

export default AccountStatement;

const Wrapper = styled("div")`
    tr{
        font-size: 12px;
    }
    td{
        padding: .5rem 1rem;
    }
    tr:nth-child(even){
        background-color: #F9FAFB;
    }
    & .head{
        background-color: #F9FAFB;
        
    }
    & .value {
        color: var(--grey-300);
    }
    & .subtotal{
        color: #0CA484;
    }

`