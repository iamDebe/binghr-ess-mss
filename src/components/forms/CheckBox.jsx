import React from "react";
import { styled } from "goober";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  & input[type="checkbox"] {
    accent-color: var(--red-400);
    cursor: pointer;
  }
  & input[type="radio"] {
    accent-color: var(--red-400);
    cursor: pointer;
  }
  .label {
    font-size: 12px;
    line-height: 15px;
    color: var(--grey-600);
  }
  .error {
    background-color: var(--red-200);
  }
`;

const CheckBox = ({ label, ...props }) => {
  return (
    <Wrapper>
      <input {...props} type={props.type || "checkbox"} />
      <span className="label">{label}</span>
    </Wrapper>
  );
};

export default CheckBox;
