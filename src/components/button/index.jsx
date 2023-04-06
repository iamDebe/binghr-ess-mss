import React from "react";
import { styled } from "goober";

const buttonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  max-height: 2.375rem;
  max-width: var(--button-width);
  width: 100%;
  padding: var(--button-padding);
  margin: var(--button-margin);
  background: var(--button-bg-color);
  color: var(--button-text-color);
  border: 1px solid var(--button-border);
  border-radius: var(--br);
  text-align: center;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  svg {
    fill: var(--button-svg-color);
  }
`;

const Button = ({ leftIcon, rightIcon, iconcolor, textcolor, bg, border, margin, padding, width, children, className="", onClick, type="button"}) => {
  const customStyles = `
    --button-padding: ${padding || "0.625rem"};
    --button-margin: ${margin || "0"};
    --button-bg-color: ${bg};
    --button-text-color: ${textcolor};
    --button-svg-color: ${iconcolor || "inherit"};
    --button-width: ${width || "6.25rem"};
    --button-border: ${border || "none"};
  `;
  const StyledButton = styled("button")`
    ${buttonStyles}
    ${customStyles}
  `;

  return (
    <StyledButton className={`type-title3 ${className}`} onClick={onClick} type={type}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

export default Button;
