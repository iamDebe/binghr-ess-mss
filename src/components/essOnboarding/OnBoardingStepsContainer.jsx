import React, { useState } from "react";
import { styled } from "goober";
import ProgressBar from "../ProgressBar";
import TermsAndCondition from "./TermsAndCondition";
import TodoList from "./TodoList";
import IntroductroryVideos from "./IntroductroryVideos";
import AddressOne from "./AddressOne";
import AddressTwo from "./AddressTwo";
import EmergencyContact from "./EmergencyContact";
import BankInformation from "./BankInformation";
import Policies from "./Policies";
import ProgressBarWithSteps from "../ProgressBarWithSteps";
import Spacer from "../Spacer";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  .onboarding-div {
    width: 70%;
    display: flex;
    align-items: center;
  }
`;

const WelcomeSection = styled("div")`
  width: 100%;
  height: 138px;
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
    }
    .type-title3 {
      color: var(--grey-400);
    }
    .type-body2 {
      color: var(--grey-300);
    }
  }
`;

function OnBoardingStepsContainer() {
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
        <div>
          <p className="type-title2">Onboarding</p>
        </div>
        <Spacer width={50} />
        <div>
          <ProgressBarWithSteps />
        </div>
      </div>
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
          continueAction={() => setActiveStep(0)}
          goBack={() => setActiveStep(7)}
        />
      )}
    </Container>
  );
}

export default OnBoardingStepsContainer;
