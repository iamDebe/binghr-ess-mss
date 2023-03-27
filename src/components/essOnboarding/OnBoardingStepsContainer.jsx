import React, { useState } from "react";
import { styled } from "goober";
import ProgressBar from "@/components/ProgressBar";
import TermsAndCondition from "@/components/essOnboarding/TermsAndCondition";
import TodoList from "@/components/essOnboarding/TodoList";
import IntroductroryVideos from "@/components/essOnboarding/IntroductroryVideos";
import AddressOne from "@/components/essOnboarding/AddressOne";
import AddressTwo from "@/components/essOnboarding/AddressTwo";
import EmergencyContact from "@/components/essOnboarding/EmergencyContact";
import BankInformation from "@/components/essOnboarding/BankInformation";
import Policies from "@/components/essOnboarding/Policies";
import ProgressBarWithSteps from "@/components/ProgressBarWithSteps";
import Spacer from "@/components/Spacer";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
  .views-container {
    display: flex;
    width: 100%;
  }
  .onboarding-div {
    width: 70%;
    display: flex;
    align-items: center;
    .div {
      margin-right: 10px;
    }
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      width: 100%;
      flex-wrap: wrap;
      padding-top: 10px;
      padding-bottom: 10px;
      div {
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
  }
`;

const WelcomeSection = styled("div")`
  width: 100%;
  background: rgba(242, 233, 185, 0.28);
  border: 0.5px solid #f2c94c;
  border-radius: 6px;
  padding: 0.8125rem 1.625rem 0.8125rem 1.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  .inner-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .steps-div {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      @media only screen and (min-width: 375px) and (max-width: 969px) {
        flex-wrap: wrap;
      }
    }
    .type-title3 {
      color: var(--grey-400);
    }
    .type-body2 {
      color: var(--grey-300);
    }
  }
`;

function OnBoardingStepsContainer({ onEndSteps = () => {} }) {
  const [stepsPercentage, setStepsPercentage] = useState(80);
  const [allSteps, setAllSteps] = useState(7);
  const [userStepsDone, setUserStepsDone] = useState(5);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Container>
      <WelcomeSection>
        <div className="inner-div">
          <div className="steps-div">
            <p className="type-title3">
              STEP {userStepsDone}/{allSteps}
            </p>
            <p className="type-body2">
              Your onboarding process is not completed, you have two more stages
              <br />
              to complete this process!
            </p>
            <ProgressBar progressPercentage={stepsPercentage} />
            <p className="type-body2">{`${stepsPercentage}% complete`}</p>
          </div>
          <div>
            <img src="/images/onboarding-step-icon.svg" />
          </div>
        </div>
      </WelcomeSection>
      <div className="onboarding-div">
        <div className="div">
          <p className="type-title2">Onboarding</p>
          <Spacer width={50} />
        </div>
        <ProgressBarWithSteps />
      </div>
      <div className="views-container">
        {activeStep === 1 && (
          <TermsAndCondition continueAction={() => setActiveStep(2)} />
        )}
        {activeStep === 2 && (
          <TodoList
            continueAction={() => setActiveStep(3)}
            goBack={() => setActiveStep(1)}
          />
        )}
        {activeStep === 3 && (
          <IntroductroryVideos
            continueAction={() => setActiveStep(4)}
            goBack={() => setActiveStep(2)}
          />
        )}
        {activeStep === 4 && (
          <AddressOne
            continueAction={() => setActiveStep(5)}
            goBack={() => setActiveStep(3)}
          />
        )}
        {activeStep === 5 && (
          <AddressTwo
            continueAction={() => setActiveStep(6)}
            goBack={() => setActiveStep(4)}
          />
        )}
        {activeStep === 6 && (
          <EmergencyContact
            continueAction={() => setActiveStep(7)}
            goBack={() => setActiveStep(5)}
          />
        )}

        {activeStep === 7 && (
          <BankInformation
            continueAction={() => setActiveStep(8)}
            goBack={() => setActiveStep(6)}
          />
        )}
        {activeStep === 8 && (
          <Policies
            continueAction={() => {
              setActiveStep(0);
              onEndSteps();
            }}
            goBack={() => {
              setActiveStep(7);
            }}
          />
        )}
      </div>
    </Container>
  );
}

export default OnBoardingStepsContainer;
