import React from "react";
import { Container, Inner } from "@/components/onboarding/CommonStyles";

function OnboardingTemplate({ children }) {
  return (
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
}

export default OnboardingTemplate;
