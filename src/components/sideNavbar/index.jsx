import React, { useState } from "react";
import { styled } from "goober";
import { ReactComponent as Barter } from "../../assets/images/barter.svg";
import { ReactComponent as NavHomeIcon } from "../../assets/images/home-nav.svg";
import { ReactComponent as ProfileHomeIcon } from "../../assets/images/profile-remove.svg";
import { ReactComponent as MyPayIcon } from "../../assets/images/note2.svg";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import { ReactComponent as ChartIcon } from "../../assets/images/chart.svg";

const Navbar = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: var(--nav-width-expanded);
  background-color: #fff;
  transition: width 0.3s;
  box-shadow: 0px 4px 7px var(--blue-100);
  &.collapsed {
    width: var(--nav-width-collapsed);
  }
  .bottom-nav {
    padding: 1.75rem 2.375rem;
  }
`;

const NavWrapper = styled("div")`
  padding: 1.75rem 2.375rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .nav-item {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0.75rem;
    gap: 15px;
    color: #848484;
    white-space: nowrap;
    min-height: 44.5px;
    svg {
      fill: #858585;
    }
    &:hover {
      background: var(--red-400);
      color: var(--grey-25);
      svg {
        fill: var(--grey-25);
      }
    }
    .nav-item-title {
      opacity: 1;
      transform: translateX(0);
      
      &.collapsed {
        position: absolute;
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 0;
      }
    }
  }
`;

const CompanyLogo = styled("div")`
  padding: 2.375rem;
  text-align: left;
  &.collapsed-logo {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const CollapseButton = styled("button")`
  display: flex;
  gap: 15px;
  cursor: pointer;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: #848484;
`;

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Navbar className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="top-nav">
        <CompanyLogo className={`${collapsed ? "collapsed-logo" : ""}`}>
          <Barter width={collapsed ? "100%" : "100"}/>
        </CompanyLogo>
        <NavWrapper>
          <a href="#" className="nav-item">
            <div className="icon">
              <NavHomeIcon fill="var(--grey-400)" />
            </div>
            <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>Home</span>
          </a>
          <a href="#" className="nav-item">
            <div className="icon">
              <ProfileHomeIcon />
            </div>
            <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>My Profile</span>
          </a>
          <a href="#" className="nav-item">
            <div className="icon">
              <MyPayIcon />
            </div>
            <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>My Pay</span>
          </a>
          <a href="#" className="nav-item">
            <div className="icon">
              <ClockIcon />
            </div>
            <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>My Time Off</span>
          </a>
          <a href="#" className="nav-item">
            <div className="icon">
              <CalendarIcon />
            </div>
            <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>Timesheet</span>
          </a>
          <a href="#" className="nav-item">
            <div className="icon">
              <ChartIcon />
            </div>
            <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>Org Chart</span>
          </a>
        </NavWrapper>
      </div>
      <div className="bottom-nav">
        <CollapseButton className="collapse-button" onClick={handleCollapse}>
          <div className="icon">
            <NavHomeIcon fill="var(--grey-400)" />
          </div>
          {!collapsed && <span>Collapse</span>}
        </CollapseButton>
      </div>
    </Navbar>
  );
};

export default SideNavbar;
