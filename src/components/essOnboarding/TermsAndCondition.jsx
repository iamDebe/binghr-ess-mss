import React from "react";
import { styled } from "goober";
import { CheckBox } from "@/components/forms";
import Button from "@/components/Button";
import ContainerTopBorder from "@/components/ContainerTopBorder";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid var(--grey-5);
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
  @media only screen and (min-width: 375px) and (max-width: 969px) {
    width: 100%;
  }
  p.type-title3 {
    color: var(--black);
  }
  .type-body2 {
    color: var(--grey-400);
  }
`;

function TermsAndCondition({ continueAction }) {
  return (
    <Container>
      <ContainerTopBorder />
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
        <div>
          <Button
            bg="var(--lilac-400)"
            textcolor="var(--grey-25)"
            padding="0.625rem 1.625rem"
            onClick={() => continueAction()}
          >
            Continue
          </Button>
        </div>
      </Inner>
    </Container>
  );
}

export default TermsAndCondition;
