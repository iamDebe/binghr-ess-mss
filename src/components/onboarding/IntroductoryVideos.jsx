import React from "react";
import { CheckBox } from "@/components/forms";
import IntroVideoCard from "@/components/IntroVideoCard";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import { ReactComponent as IntroVidImg } from "@/assets/images/intro-vid.svg";
import Button from "@/components/button";
import { HeaderText } from "@/components/onboarding/CommonStyles";
import OnboardingTemplate from "@/components/onboarding/OnboardingTemplate";

function IntroductoryVideos({ continueAction, goBack, saveData }) {
  return (
    <OnboardingTemplate>
      <div className="main-content">
        <HeaderText>
          <p className="type-title3 title">Introductory Videos</p>
        </HeaderText>
        <div className="intro-video-wrapper">
          <IntroVideoCard
            title="Building meaningful relationship "
            date="12 Feb, 2022"
            previewImageUrl={<IntroVidImg />}
            videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          <IntroVideoCard
            title="Communicating Directly With Superior  "
            date="12 Feb, 2022"
            previewImageUrl={<IntroVidImg />}
            videoUrl="https://www.youtube.com/watch?v=B1GO1HPLp7Y"
          />
          <IntroVideoCard
            title="Setting Up Your Workspace "
            date="12 Feb, 2022"
            previewImageUrl={<IntroVidImg />}
            videoUrl="https://www.youtube.com/watch?v=IDj1OBG5Tpw"
          />
          <IntroVideoCard
            title="Setting up your payroll"
            date="12 Feb, 2022"
            previewImageUrl={<IntroVidImg />}
            videoUrl="https://www.youtube.com/watch?v=1Xi4fMfwsQg"
          />
          <IntroVideoCard
            title="How Employee Timesheet works"
            date="12 Feb, 2022"
            previewImageUrl={<IntroVidImg />}
            videoUrl="https://www.youtube.com/watch?v=APCWOBUZNjc"
          />
        </div>
        <CheckBox label="I have watched all the videos in this section " />
      </div>
      <ButtonGroups>
        <Button
          bg="var(--grey-4)"
          textcolor="var(--grey-25)"
          rightIcon={<CopySuccess stroke="var(--grey-25)"/>}
          iconcolor="var(--grey-25)"
          onClick={() => saveData()}
          className="save-btn"
        >
          Save
        </Button>
        <div className="prev-cont-btn">
          <Button
            border="var(--lilac-400)"
            bg="var(--white)"
            textcolor="var(--lilac-400)"
            onClick={() => goBack()}
          >
            Previous
          </Button>
          <Button
            bg="var(--lilac-400)"
            textcolor="var(--grey-25)"
            onClick={() => continueAction()}
          >
            Continue
          </Button>
        </div>
      </ButtonGroups>
    </OnboardingTemplate>
  );
}

export default IntroductoryVideos;
