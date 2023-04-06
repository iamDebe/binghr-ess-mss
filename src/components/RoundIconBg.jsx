import React from "react";
import { styled } from "goober";

const roundIconStyles = `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 2rem;
    max-width: 2rem;
    min-height: 2rem;
    max-height: 2rem;
    background: var(--roundicon-bg);
    color: var(--roundicon-text-color);
`;

const RoundIconBg = ({ icon, bg, textcolor }) => {
    const customStyles = `
    --roundicon-bg: ${bg || "var(--grey-100)"};
    --roundicon-text-color: ${textcolor || "var(--grey-300)"};
  `;
  const Container = styled("div")`
    ${roundIconStyles}
    ${customStyles}
  `;
    return (
        <Container>
            {icon}
        </Container>
    );
};

export default RoundIconBg;