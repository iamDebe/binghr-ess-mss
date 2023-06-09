import React, { useEffect, useState } from "react";
import { styled, css } from "goober";
import { mobile } from "@/globalStyle";
import ProgressBar from "@/components/ProgressBar";
import TermsAndCondition from "@/components/onboarding/TermsAndCondition";
import TodoList from "@/components/onboarding/TodoList";
import IntroductoryVideos from "@/components/onboarding/IntroductoryVideos";
import AddressOne from "@/components/onboarding/AddressOne";
import AddressTwo from "@/components/onboarding/AddressTwo";
import EmergencyContact from "@/components/onboarding/EmergencyContact";
import BankInformation from "@/components/onboarding/BankInformation";
import Policies from "@/components/onboarding/Policies";
import ProgressBarWithSteps from "@/components/ProgressBarWithSteps";
import { ReactComponent as WarningIcon } from "@/assets/images/warning.svg";

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

const welcomeSectionStyles = `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;
  width: 100%;
  background: var(--welcome-bg-color);
  border: 0.5px solid var(--welcome-border);
  border-radius: var(--br-lg);
  padding: 0.8125rem 1.625rem 0.8125rem 1.625rem;
  color: var(--grey-400);
  .steps-div {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    ${mobile} {
      width: 100%;
    }
  }
  .warning-bg {
    background: #F2D98E;
    border-radius: var(--br);
    min-height: 2.625rem;
    min-width: 2.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${mobile} {
    flex-direction: column-reverse;
  }
`;

const borderClass = css({
  '--border-width': '0',
});

function OnBoardingStepsContainer({ onEndSteps = () => {} }) {
  const [stepsPercentage, setStepsPercentage] = useState(10);
  const [allSteps, setAllSteps] = useState(8);
  const [userStepsDone, setUserStepsDone] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [borderWidth, setBorderWidth] = useState(0);

  useEffect(() => {
    setBorderWidth(100 * (activeStep / allSteps));
  }, [activeStep, allSteps]);

  const borderWidthClass = css({
    '--border-width': `${borderWidth}%`,
  }, borderClass);

  const customStyles = `
    --welcome-bg-color: ${userStepsDone == 8 ? "rgba(221, 245, 217, 0.28)" : "rgba(242, 233, 185, 0.28)"};
    --welcome-border: ${userStepsDone == 8 ? "var(--green-2)" : "var(--yellow)"};
  `;

  const WelcomeSection = styled("div")`
    ${welcomeSectionStyles}
    ${customStyles}
  `;

  return (
    <Container className={borderWidthClass}>
      <WelcomeSection>
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
        <div className="warning-bg">
          <WarningIcon fill="var(--grey-25)" />
        </div>
      </WelcomeSection>
      <div className="onboarding-div">
        <div className="div">
          <p className="type-title2">Onboarding</p>
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
          <IntroductoryVideos
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
