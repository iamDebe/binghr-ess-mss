import React from "react";
import { Link } from "react-router-dom";
import { OnboardingWrapper } from "@/assets/wrappers";

const OnboardingLayout = ({ children }) => {
  return (
    <OnboardingWrapper>
      <div className="header">
        <Link to="/">
          <img src="/images/logo.svg" width="113" alt="BingHR" />
        </Link>
      </div>
      {children}
      <div className="footer">
        <span>&copy; 2022 BingHR. All right reserved </span>
      </div>
    </OnboardingWrapper>
  );
};

export default OnboardingLayout;
