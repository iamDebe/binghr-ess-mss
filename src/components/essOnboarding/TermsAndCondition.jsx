import React from "react";
import { styled } from "goober";
import { CheckBox } from "../forms";
import CustomButton from "../CustomButton";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
  .top-border {
    width: 13%;
    border-top: 7px solid #d2446e;
    top: 0;
    border-radius: 4px 0.5px 4px 0.5px;
  }
`;

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  .type-title3 {
    color: var(--grey-400);
  }
  .type-body2 {
    color: var(--grey-300);
  }
`;

function TermsAndCondition({ continueAction }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Welcome</p>
        <p className="type-body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <CheckBox label="I agree to terms and condition" />
        <CustomButton
          width="111px"
          variant="#6c3787"
          label="Continue"
          onClick={() => continueAction()}
        />
      </Inner>
    </Container>
  );
}

export default TermsAndCondition;
