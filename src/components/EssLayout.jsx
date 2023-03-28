import React, { useState } from "react";
import { styled } from "goober";
import SideNavbar from "@/components/sideNavbar";
import { desktop, desktopMidi } from "@/globalStyle";
// import TopBar from "@/components/TopBar";

const Wrapper = styled("div")`
  width: 100%;
`;

const Main = styled("div")`
    width: var(--content-window-width-expanded);
    margin-left: auto;
    padding: 2rem;
    &.collapsed {
        width: var(--content-window-width-collapsed);
    }
    ${desktop} {
        padding: 2rem 4.0625rem 3.5rem 3.25rem;
    }
    ${desktopMidi} {
        padding: 2rem;
    }
`;

const EssLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };
    
  return (
    <Wrapper>
      <SideNavbar collapsed={collapsed} onToggleCollapse={handleCollapse} />
      <Main className={collapsed ? "collapsed" : ""}>
        {/* <TopBar /> */}
        {children}
      </Main>
    </Wrapper>
  );
};

export default EssLayout;
