import React from 'react'
import { styled } from 'goober';

const HorizontalLineLeft = () => {
  return (
    <Hrl />
  )
}

export default HorizontalLineLeft;

const Hrl = styled("div")`
    position: relative;

    &::before{
        content: "";
        width: 67%;
        height: 2px;
        background: var(--grey-200);
        left: 48%;
        top: -40px;
        position: absolute;
        margin: 0 auto;
    }
   
`;