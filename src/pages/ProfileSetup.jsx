import React, { useState } from "react";
import OnboardingLayout from "@/components/OnboardingLayout";
import ProfileSetUpStep1 from "@/components/profileSetup/ProfileSetUpStep1";
import ProfileSetUpStep2 from "@/components/profileSetup/ProfileSetUpStep2";
import ProfileSetUpStep3 from "@/components/profileSetup/ProfileSetUpStep3";

const profileSteps = {
  step1: true,
  step2: false,
  step3: false,
};

  const ProfileSetup = (props) => {
  const [step, setStep] = useState(profileSteps);
  return (
    <OnboardingLayout>
      {step.step1 && (
        <ProfileSetUpStep1 setStep={setStep} />
      )}
      {step.step2 && (
        <ProfileSetUpStep2 setStep={setStep} />
      )}
      {step.step3 && (
        <ProfileSetUpStep3 setStep={setStep} {...props} />
      )}
    </OnboardingLayout>
  );
};

export default ProfileSetup;
