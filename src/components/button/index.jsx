import React from "react";
import { styled } from "goober";

const Container = styled("button")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 0.625rem;
    background: ${props => props.bg};
    color: ${props => props.textcolor};
    border: ${(props) =>
        props.border ? `1px solid ${props.border}` : "none"};
    border-radius: var(--br);
    text-align: center;
    outline: none;
    font-family: inherit;
    cursor: pointer;
`;

const Button = ({ leftIcon, rightIcon, textcolor, bg, border, children, className, onClick}) => {
  return (
    <Container className={`type-title3 ${className}`} bg={bg} textcolor={textcolor} border={border}onClick={onClick}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </Container>
  );
};

export default Button;