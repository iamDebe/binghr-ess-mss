import React from "react";
import { styled } from "goober";
import SideNavbar from "../components/sideNavbar";
// import TopBar from "../components/topBar";

const Wrapper = styled("div")`
  width: 100%;
  display: flex;
`;

const Main = styled("div")`
  padding: 2rem 3.875rem 3.5rem 3.125rem;
  width: 100%;
`;

const EssLayout = ({ children }) => {
  return (
    <Wrapper>
      <SideNavbar />
      <Main>
        {/* <TopBar /> */}
        {children}
      </Main>
    </Wrapper>
  );
};

export default EssLayout;
