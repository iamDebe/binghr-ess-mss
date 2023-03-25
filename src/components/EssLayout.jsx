import React from "react";
import { styled } from "goober";
import SideNavbar from "@/components/sideNavbar";
import { desktop, desktopMidi } from "@/globalStyle";
// import TopBar from "@/components/topBar";

const Wrapper = styled("div")`
    display: flex;
`;

const Main = styled("div")`
    ${desktop} {
        padding: 2rem 4.0625rem 3.5rem 3.25rem;
    }
    ${desktopMidi} {
        padding: 2rem;
    }
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
}

export default EssLayout;