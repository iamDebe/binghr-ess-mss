import React from "react";
import { styled } from "goober";
import SideNavbar from "../components/sideNavbar";

const Wrapper = styled("div")`
    display: flex;
`;

const EssHome = () => {
    return (
        <Wrapper>
            <SideNavbar />
        </Wrapper>
    );
}

export default EssHome;