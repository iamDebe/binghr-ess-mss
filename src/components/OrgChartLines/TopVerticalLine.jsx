import React from 'react';
import { styled } from 'goober';

const TopVerticalLine = () => {
  return (
      <VrlTop />
  )
}

export default TopVerticalLine;

const VrlTop = styled("div")`
    position: relative;

    &::after{
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background: var(--grey-200);
        left: -20px;
        top: -20px;
        position: absolute;
        transform: rotate(90deg);
    }
    
`;
