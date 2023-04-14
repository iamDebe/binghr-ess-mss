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
        width: 100%;
        height: 2px;
        background: var(--grey-200);
        right: 0%;
        top: -40px;
        position: absolute;
        margin: 0 auto;
    }
   
`;