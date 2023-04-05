import React from "react";
import { styled } from "goober";

const Border = styled("div")`
    width: var(--border-width);
    border-top: 7px solid var(--red-400);
    border-radius: var(--br-lg) var(--br-sm) var(--br-lg) var(--br-sm);
`;

const ContainerTopBorder = () => {
    return (
        <Border />
    );
};

export default ContainerTopBorder;