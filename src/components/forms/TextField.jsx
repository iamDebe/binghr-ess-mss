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
  input {
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
    &[type="date"]::-webkit-calendar-picker-indicator {
      opacity: 0;
      cursor: pointer;
      transform: translateX(23px);
      z-index: 5;
    }
    &[type="date"]:in-range::-webkit-datetime-edit-year-field,
    &[type="date"]:in-range::-webkit-datetime-edit-month-field,
    &[type="date"]:in-range::-webkit-datetime-edit-day-field {
      opacity: 0.5;
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
  .optional {
    display: flex;
    align-items: center;
    & span {
      font-size: 12px;
      color: var(--neutral-300);
    }
  }
`;

const TextField = ({ label, icon, optional, ...props }) => {
  return (
    <Wrapper>
      <div className="optional">
        <label htmlFor={props.id || props.name}>{label}</label>
        {optional && <span>&nbsp;(Optional)</span>}
      </div>
      <input className="text-input" {...props} />
      {icon && <img src={icon} className="input-icon icon" />}
    </Wrapper>
  );
};

export default TextField;
