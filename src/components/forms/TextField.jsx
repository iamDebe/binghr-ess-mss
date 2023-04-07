
import React, {useEffect} from "react";
import { styled } from "goober";

export const textFieldStyles = `
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: var(--textfield-margin-bottom);
  width: var(--textfield-width);
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
  .label {
    display: flex;
    align-items: center;
    & span {
      font-size: 12px;
      color: var(--grey-300);
    }
  }
`;

const TextField = React.forwardRef(({ label, icon, optional, disabled, marginbottom, width, className="", ...props }, ref) => {
  useEffect(()=>{
  }, [disabled]);

  const customStyles = `
    --textfield-margin-bottom: ${marginbottom || "1.75rem"};
    --textfield-width: ${width || "100%"};
  `;
  const Wrapper = styled("div")`
    ${textFieldStyles}
    ${customStyles}
  `;

  return (
    <Wrapper className={className}>
      <div className="label">
        <label htmlFor={props.id || props.name}>{label}</label>
        {optional && <span>&nbsp;(Optional)</span>}
      </div>
      <input className="text-input" {...props} ref={ref} disabled={disabled} />
      {icon && icon }
    </Wrapper>
  );
});

export default TextField;
