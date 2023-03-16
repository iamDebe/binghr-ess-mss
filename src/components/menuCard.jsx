import React from "react";
import { styled } from "goober";

const Container = styled("a")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 0;
    width: 100%;
    gap: 19px;
    border: 1px solid var(--grey-100);
    border-radius: var(--br);
    .icon-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--grey-100);
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
    }
    .menu-title {
        font-family: var(--lato-font);
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 140%;
        color: #848484;
    }
`;

const MenuCard = ({ link, icon, title }) => {
    return (
        <Container href={link}>
            <div className="icon-bg">{icon}</div>
            <p className="menu-title">{title}</p>
        </Container>
    );
};

export default MenuCard;