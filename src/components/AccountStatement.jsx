import React from 'react';
import { styled } from 'goober';

const AccountStatement = ({paymentData}) => {
  return (
    <Wrapper>
         <table className='table'>
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
                        <td className='type-body3 amount'>{data.value}</td>
                    </tr>
                ))}
                <tr>
                    <td className='subtotal type-body3'>Sub total</td>
                    <td className='subtotal-value type-body3'>500,000</td>
                </tr>
            </tbody>
        </table>
    </Wrapper>
  )
}

export default AccountStatement;

const Wrapper = styled("div")`
    width: 100%;
    .table {
        width: 100%;
        thead {
            color: var(--grey-400);
        }
        td {
            padding: 0.5rem;
            width: 50%;
        }
        tr:nth-child(even){
            background-color: var(--grey-50);
        }
        .head {
            background-color: var(--grey-50);  
        }
        .type-body3 {
            color: var(--grey-400);
        }
        .amount {
            color: var(--grey-300);
        }
        .subtotal {
            color: #219653;
            &.value {
                color: #747577;
            }
        }
    }
`