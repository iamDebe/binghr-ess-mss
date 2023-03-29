import React from "react";
import { styled } from "goober";
import { ReactComponent as MenuIcon } from "@/assets/images/menu-icon.svg";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.875rem 1.25rem 1rem;
    background: var(--white);
`;

const MobileNav = () => {
    return (
        <Container>
            <img src="/images/barter.svg" width="85" alt="company-logo" />
            <MenuIcon fill="#292D32" />
        </Container>
    );
};

export default MobileNav;