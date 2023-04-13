import React from 'react'
import { styled } from "goober";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  label {
    font-size: 12px;
    color: var(--grey-400);
  }
  textarea {
    background: var(--grey-50);
    color: var(--grey-400);
    font-family: inherit;
    font-size: 12px;
    padding: 0.5rem 2.4rem 0.5rem 1rem;
    border: 0.5px solid var(--grey-200);
    border-radius: 2px;
    outline: none;
    width: 100%;
    resize:vertical;
    &::placeholder {
      font-family: inherit;
      color: var(--grey-300);
    }
    &:focus {
      background: var(--grey-100);
      border: 1px solid var(--grey-200);
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
      color: var(--grey-300);
    }
  }
`;


const TextAreaField = ({ label, icon, optional, disabled, rows, cols, placeholder, ...props }) => {

  return (
    <Wrapper>
         <div className="optional">
          <label htmlFor={props.id || props.name}>{label}</label>
          {optional && <span>&nbsp;(Optional)</span>}
        </div>
        <textarea className="text-input" {...props} rows={rows} cols={cols} placeholder={placeholder} disabled={disabled} />
        {icon && icon }
    </Wrapper>
  )

 
  
}

export default TextAreaField;

