import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "goober";
import { ReactComponent as NavHomeIcon } from "@/assets/images/home-nav.svg";
import { ReactComponent as ProfileHomeIcon } from "@/assets/images/profile-remove.svg";
import { ReactComponent as MyPayIcon } from "@/assets/images/note2.svg";
import { ReactComponent as ClockIcon } from "@/assets/images/clock.svg";
import { ReactComponent as CalendarIcon } from "@/assets/images/calendar.svg";
import { ReactComponent as ChartIcon } from "@/assets/images/chart.svg";
import { ReactComponent as CloseIcon } from "@/assets/images/close.svg";
import { mobile } from "@/globalStyle";

const Navbar = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: var(--nav-width-expanded);
  background-color: #fff;
  transition: width 0.3s;
  box-shadow: 0px 4px 7px var(--blue-100);
  position: fixed;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;
  &.collapsed {
    width: var(--nav-width-collapsed);
  }
  .bottom-nav {
    padding: 1.75rem 2.375rem;
    width: 100%;
  }
  .close-btn-wrapper {
    margin: 0 auto;
    width: auto;
  }
  &.open {
    display: flex;
    transform: translateX(0);
    transition: transform 0.8s ease-in;
  }
  ${mobile} {
    display: none;
  }
`;

const NavWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 2.375rem;
  gap: 0.5rem;
  .nav-item {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 0.75rem;
    gap: 15px;
    color: var(--grey-400);
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    white-space: nowrap;
    min-height: 42px;
    svg {
      fill: var(--grey-400);
    }
    &:hover,
    &.active {
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
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: var(--br);
  font-family: inherit;
  color: var(--grey-400);
  &.close-btn {
    justify-content: center;
    height: 2.625rem;
    width: 2.625rem;
    border-radius: 50%;
  }
`;

const navItems = [
  {
    to: "/ess",
    icon: <NavHomeIcon />,
    title: "Home",
  },
  {
    to: "/ess/profile",
    icon: <ProfileHomeIcon />,
    title: "My Profile",
  },
  {
    to: "/ess/my-pay",
    icon: <MyPayIcon />,
    title: "My Pay",
  },
  {
    to: "/ess/my-timeoff",
    icon: <ClockIcon />,
    title: "My Time Off",
  },
  {
    to: "/ess/timesheet",
    icon: <CalendarIcon />,
    title: "Timesheet",
  },
  {
    to: "/ess/orgchart",
    icon: <ChartIcon />,
    title: "Org Chart",
  },
];

const SideNavbar = ({ collapsed, onToggleCollapse, isOpen, closeSidebar }) => {
  const location = useLocation();
  
  return (
    <Navbar
      className={`${collapsed ? "collapsed" : ""} ${isOpen ? "open" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="top-nav">
        <CompanyLogo className={`${collapsed ? "collapsed-logo" : ""}`}>
          <img src="/ess/images/barter.svg" width={collapsed ? "100" : "100"} alt="company-logo" />
        </CompanyLogo>
        <NavWrapper>
          {navItems.map((item) => (
            <Link
              key={item.to+item.title}
              to={item.to}
              className={`nav-item ${location.pathname === item.to ? "active" : ""}`}
            >
              <div className="icon">{item.icon}</div>
              <span className={`nav-item-title ${collapsed ? "collapsed" : ""}`}>{item.title}</span>
            </Link>
          ))}
        </NavWrapper>
      </div>
        <div className={`bottom-nav ${isOpen ? "close-btn-wrapper" : ""}`}>
          {isOpen ? (
            <CollapseButton className="close-btn" onClick={closeSidebar}>
              <div className="icon">
                <CloseIcon fill="var(--red)" />
              </div>
            </CollapseButton>
          ) : (
            <CollapseButton onClick={onToggleCollapse}>
              <div className="icon">
                <NavHomeIcon fill="var(--grey-400)" />
              </div>
              {!collapsed && <span>Collapse</span>}
            </CollapseButton>
          )}
        </div>
    </Navbar>
  );
};

export default SideNavbar;
