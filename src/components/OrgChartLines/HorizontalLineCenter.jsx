import React from 'react'
import { styled } from 'goober';

const HorizontalLineCenter = () => {
  return (
    <Hrl />
  )
}

export default HorizontalLineCenter;

const Hrl = styled("div")`
    position: relative;
    &::before{
      content: "";
      width: 1000px;
      height: 2px;
      background-color: var(--grey-200);
      right: -500px;
      top: 40px;
      position: absolute;
    }
   
`;