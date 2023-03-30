import React, { useEffect, useState } from "react";
import { styled } from "goober";
import SideNavbar from "@/components/SideNavbar";
import { mobile, desktop, desktopMidi } from "@/globalStyle";
import MobileNav from "@/components/sideNavbar/MobileNav";
// import TopBar from "@/components/topBar";

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
    ${mobile} {
        width: 100% !Important;
    }
`;

const EssLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if (isSidebarOpen) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = '';
        }
    }, [isSidebarOpen]);
    
  return (
    <Wrapper>
      <SideNavbar collapsed={collapsed} onToggleCollapse={handleCollapse} isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <MobileNav toggleSidebar={toggleSidebar} />
      <Main className={collapsed ? "collapsed" : ""}>
        {/* <TopBar /> */}
        {children}
      </Main>
    </Wrapper>
  );
};

export default EssLayout;
