import React from "react";
import { CheckBox } from "@/components/forms";
import Button from "@/components/Button";
import { HeaderText } from "@/components/EssOnboarding/CommonStyles";
import OnboardingTemplate from "@/components/EssOnboarding/OnboardingTemplate";

function TermsAndCondition({ continueAction }) {
  return (
    <OnboardingTemplate>
      <div className="main-content">
        <HeaderText>
          <p className="type-title3 title">Welcome</p>
        </HeaderText>
        <p className="type-body2 welcome-text">
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
      </div>
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
    </OnboardingTemplate>
  );
}

export default TermsAndCondition;
