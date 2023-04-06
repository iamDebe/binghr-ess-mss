import React from "react";
import { Link } from "react-router-dom";
import { OnboardingWrapper } from "@/assets/wrappers";
import { ReactComponent as Logo } from "@/assets/images/logo.svg";


const OnboardingLayout = ({ children }) => {
  return (
    <OnboardingWrapper>
      <div className="header">
        <Link to="/">
          <Logo />
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
