import React from "react";
import { styled } from "goober";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.75rem;
  position: relative;
  width: 100%;
  label {
    font-size: 12px;
    line-height: 15px;
    color: var(--neutral-400);
  }
  select {
    background: var(--neutral-50);
    color: var(--neutral-400);
    font-family: inherit;
    font-size: 12px;
    padding: 0.5rem 2.4rem 0.5rem 1rem;
    border: 1px solid var(--neutral-50);
    border-radius: 2px;
    outline: none;
    &::placeholder {
      font-family: inherit;
      color: var(--neutral-300);
    }
    &:focus {
      background: var(--neutral-100);
      border: 1px solid var(--neutral-200);
    }
  }
  .input-icon {
    position: absolute;
    &.icon {
      bottom: 0.5rem;
      right: 1rem;
    }
  }
  .error {
    background-color: var(--red-200);
  }
`;

const SelectField = ({ label, ...props }) => {
  return (
    <Wrapper>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select className="text-input" {...props} />
    </Wrapper>
  );
};

export default SelectField;
