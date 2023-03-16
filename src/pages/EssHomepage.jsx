import React, { useState } from "react";
import { styled } from "goober";
import EssLayout from "../components/EssLayout";
import AuthWelcomeModal from "../components/AuthWelcomeModal";

const WelcomeSection = styled("div")`
  border: 0.5px solid var(--grey-5);
  padding: 0.8125rem 1.625rem 0.8125rem 1.625rem;
`;

const EssHome = () => {
    // When we redirect to this page for the first time after newly registering, that is only when we will show the welcome modal, so we will ensure that we make an API call here on the first render to fetch user data and check the value of a particular field to determine if the user has previouly set up their profile or not
  const [welcomeModalIsVisible, setWelcomeModalIsVisible] = useState(true);

  return (
    <EssLayout>
      <WelcomeSection>
        <p>Hi</p>
      </WelcomeSection>
      <AuthWelcomeModal
        isVisible={welcomeModalIsVisible}
        clickAction={() => setWelcomeModalIsVisible(false)}
      />
    </EssLayout>
  );
};

export default EssHome;
