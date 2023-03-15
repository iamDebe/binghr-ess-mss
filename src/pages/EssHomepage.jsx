import React from "react";
import { styled } from "goober";
import EssLayout from "../components/EssLayout";

const WelcomeSection = styled("div")`
    border: 0.5px solid var(--grey-5);
    padding: 0.8125rem 1.625rem 0.8125rem 1.625rem;
`;

const EssHome = () => {
    return (
        <EssLayout>
            <WelcomeSection>
                <p>Hi</p>
            </WelcomeSection>
        </EssLayout>
    );
}

export default EssHome;