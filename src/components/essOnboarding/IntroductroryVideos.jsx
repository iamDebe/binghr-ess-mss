import React from "react";
import { styled } from "goober";
import { CheckBox } from "../forms";
import CustomButton from "../CustomButton";
import IntroVideoCard from "../IntroVideoCard";
import Spacer from "../Spacer";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
  .intro-vid-div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap; wrap;
  }
  .top-border {
    width: 39%;
    border-top: 7px solid #d2446e;
    top: 0;
    border-radius: 4px 0.5px 4px 0.5px;
  }
`;

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  .type-title3 {
    color: var(--grey-400);
  }
  .button-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
    }
  }
`;

function IntroductroryVideos({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Introductory Videos</p>
        <div className="intro-vid-div">
          <IntroVideoCard
            title="Building meaningful relationship "
            date="12 Feb, 2022"
            previewImageUrl="/images/intro-vid.png"
            videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          <IntroVideoCard
            title="Communicating Directly With Superior  "
            date="12 Feb, 2022"
            previewImageUrl="/images/intro-vid.png"
            videoUrl="https://www.youtube.com/watch?v=B1GO1HPLp7Y"
          />
          <IntroVideoCard
            title="Setting Up Your Workspace "
            date="12 Feb, 2022"
            previewImageUrl="/images/intro-vid.png"
            videoUrl="https://www.youtube.com/watch?v=IDj1OBG5Tpw"
          />
          <IntroVideoCard
            title="Setting up your payroll"
            date="12 Feb, 2022"
            previewImageUrl="/images/intro-vid.png"
            videoUrl="https://www.youtube.com/watch?v=1Xi4fMfwsQg"
          />
          <IntroVideoCard
            title="How Employee Timesheet works"
            date="12 Feb, 2022"
            previewImageUrl="/images/intro-vid.png"
            videoUrl="https://www.youtube.com/watch?v=APCWOBUZNjc"
          />
        </div>
        <CheckBox label="I have watched all the videos in this section " />
        <div className="button-groups">
          <CustomButton
            width="111px"
            variant="#BDBDBD"
            label="Save"
            onClick={() => saveData()}
            iconPosition="right"
            iconUrl="/images/copy-success.svg"
          />
          <div>
            <CustomButton
              width="111px"
              variant="white"
              textColor="#6C3787"
              label="Previous"
              onClick={() => goBack()}
              secondaryBtn
            />
            <Spacer width={20} />
            <CustomButton
              width="111px"
              variant="#6c3787"
              label="Continue"
              onClick={() => continueAction()}
            />
          </div>
        </div>
      </Inner>
    </Container>
  );
}

export default IntroductroryVideos;
