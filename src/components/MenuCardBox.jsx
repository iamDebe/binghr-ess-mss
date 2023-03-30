import React from "react";
import { styled } from "goober";
import RoundIconBg from "@/components/RoundIconBg";

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
    .menu-title {
        font-family: var(--lato-font);
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 140%;
        color: #848484;
    }
`;

const MenuCard = ({ link, icon, iconBg, title }) => {
    return (
        <Container href={link}>
            <RoundIconBg bg={iconBg} icon={icon}/>
            <p className="menu-title">{title}</p>
        </Container>
    );
};

export default MenuCard;