import React from "react";
import { styled } from "goober";

const tagStyles = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5px 8px;
    background: var(--tag-bg);
    border: 1px solid var(--tag-border-color);
    color: var(--tag-text-color);
    border-radius: 24px;
`;

const Tag = ({ bg, bordercolor, textcolor, leftIcon, children, rightIcon }) => {
    const customStyles = `
        --tag-bg: ${bg || "var(--white)"};
        --tag-text-color: ${textcolor || "#674D1B"};
        --tag-border-color: ${bordercolor};
    `;
    const Container = styled("div")`
        ${tagStyles}
        ${customStyles}
    `;
    return (
        <Container className="type-body3">
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </Container>
    );
};

export default Tag;