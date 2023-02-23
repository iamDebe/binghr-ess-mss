import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <Link to="/">
            <img src="/images/logo.svg" width="113" alt="BingHR" />
          </Link>
        </div>
        {children}
        <div className="footer">
          <span>&copy; 2022 BingHR. All right reserved </span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
