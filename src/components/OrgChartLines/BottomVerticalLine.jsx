import React from 'react';
import { styled } from 'goober';

const BottomVerticalLine = () => {
  return (
    <VrlBottom />
  )
}

export default BottomVerticalLine;

const VrlBottom = styled("div")`
    position: relative;

    &::after{
        content: "";
        display: block;
        width: 42px;
        height: 2px;
        background: var(--grey-200);
        left: -20px;
        top: 206px;
        position: absolute;
        transform: rotate(90deg);
    }
   
`;