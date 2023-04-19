import React from 'react';
import { styled } from 'goober';

const TopVerticalLineAuth = () => {
  return (
    <VrlTop />
  )
}

export default TopVerticalLineAuth;

const VrlTop = styled("div")`
    position: relative;
    &::after{
      content: "";
      display: block;
      width: 34px;
      height: 2px;
      background: var(--grey-200);
      left: 120px;
      top: -16px;
      position: absolute;
      transform: rotate(90deg);
    }
    
`;
