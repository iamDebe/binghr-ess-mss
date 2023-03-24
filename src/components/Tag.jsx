import React from "react";
import { styled } from "goober";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5px 8px;
    background: ${props => props.bg};
    border: 1px solid ${props => props.bordercolor};
    color: ${props => props.textcolor};
    border-radius: 24px;
`;

const Tag = ({ bg="var(--white)", bordercolor, textcolor = "#674D1B", leftIcon, children, rightIcon }) => {
    return (
        <Container className="type-body3" bg={bg} bordercolor={bordercolor} textcolor={textcolor}>
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </Container>
    );
};

export default Tag;