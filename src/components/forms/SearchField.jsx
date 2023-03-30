
import React from "react";
import { styled } from "goober";

export const Wrapper = styled("div")`
display: flex;
flex-direction: column;
position: relative;
width: 100%;
label {
  font-size: 12px;
  line-height: 15px;
  color: var(--grey-400);
}
input {
  background: var(--grey-50);
  color: var(--grey-400);
  font-family: inherit;
  font-size: 12px;
  padding: 0.5rem 2.4rem 0.5rem 1rem;
  border: 0.5px solid var(--grey-200);
  border-radius: 2px;
  outline: none;
  &::placeholder {
    font-family: inherit;
    color: var(--grey-300);
  }
  &:focus {
    background: var(--grey-100);
    border: 1px solid var(--grey-200);
  }
  &[type="search"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
    transform: translateX(23px);
    z-index: 5;
  }
  &[type="search"]:in-range::-webkit-datetime-edit-year-field,
  &[type="search"]:in-range::-webkit-datetime-edit-month-field,
  &[type="search"]:in-range::-webkit-datetime-edit-day-field {
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


const SearchField = ({ icon, optional, label, disabled, ref, ...props }) => {
 
  return (
    <>
    <Wrapper>
      <div className="optional">
        <label htmlFor={props.id || props.name}>{label}</label>
        {optional && <span>&nbsp;(Optional)</span>}
      </div>
      <input className="text-input" {...props} ref={ref} disabled={disabled} />
      {icon && icon }
    </Wrapper>
     
    
    </>
  );
}


export default SearchField;