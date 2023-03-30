import React from "react";
import { styled, css } from "goober";

const Container = styled("button")(
  ({ padding, margin, bg, textcolor, border }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: ${padding ? "var(--padding)" : "0.625rem"};
    margin: ${margin ? "var(--margin)" : "0"};
    background: ${bg && "var(--bg)"};
    color: ${textcolor && "var(--textcolor)"};
    border: ${border ? `1px solid ${"var(--border)"}` : "none"};
    border-radius: var(--br);
    text-align: center;
    outline: none;
    font-family: inherit;
    cursor: pointer;
  `
);

const Button = ({
    leftIcon,
    rightIcon,
    textcolor,
    bg,
    border,
    margin,
    padding,
    children,
    onClick
}) => {
    const containerClassName = css({
    "--padding": padding,
    "--margin": margin,
    "--bg": bg,
    "--textcolor": textcolor,
    "--border": border
    });
    return (
        <Container
          className={`${containerClassName}`}
          onClick={onClick}
        >
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </Container>
    );
};

export default Button;
