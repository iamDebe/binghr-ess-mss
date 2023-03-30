import React from "react";
import { styled } from "goober";

const Container = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    min-width: 2rem;
    min-height: 2rem;
    background: ${props => props.bg};
    color: ${props => props.textcolor};
`;

const RoundIconBg = ({ icon, bg = "var(--grey-100)", textcolor="var(--grey-300)" }) => {
    return (
        <Container bg={bg} textcolor={textcolor}>
            {icon}
        </Container>
    );
};

export default RoundIconBg;