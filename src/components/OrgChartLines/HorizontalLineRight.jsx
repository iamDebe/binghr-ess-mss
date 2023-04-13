import React from 'react'
import { styled } from 'goober';

const HorizontalLineRight = () => {
  return (
    <Hrl />
  )
}

export default HorizontalLineRight;

const Hrl = styled("div")`
    position: relative;

    &::before{
        content: "";
        width: 67%;
        height: 2px;
        background: var(--grey-200);
        right: 51%;
        top: -40px;
        position: absolute;
        margin: 0 auto;
    }
   
`;