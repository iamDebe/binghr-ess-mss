import React from "react";
import { styled } from "goober";
import SideNavbar from "../components/sideNavbar";

const Wrapper = styled("div")`
    display: flex;
`;

const Container = styled("div")`
    padding: 2rem 3.875rem 3.5rem 3.125rem;
`;

const EssLayout = ({ children }) => {
    return (
        <Wrapper>
            <SideNavbar />
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
}

export default EssLayout;