import React from 'react';
import { styled } from 'goober';

const TopVerticalLineOpen = () => {
  return (
      <VrlTopOpen />
  )
}

export default TopVerticalLineOpen;


const VrlTopOpen = styled("div")`
    position: relative;

    &::after{
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background: red;
        left: 30%;
        top: -20px;
        position: absolute;
        transform: rotate(90deg);
    }
    
`;
