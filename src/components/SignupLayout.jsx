import React from 'react';
import { Link } from 'react-router-dom';
import { SignupContainer, SignupWrapper } from './commonStyles';

const SignupLayout = ({children}) => {
  return (
    <SignupContainer>
      <SignupWrapper>
        <div className="header">
          <Link to="/">
            <img src="/images/logo.svg" width="113" alt="BingHR" />
          </Link>
        </div>
        {children}
        <div className="footer">
          <span>&copy; 2022 BingHR. All right reserved </span>
        </div>
      </SignupWrapper>
    </SignupContainer>
  );
}

export default SignupLayout;
