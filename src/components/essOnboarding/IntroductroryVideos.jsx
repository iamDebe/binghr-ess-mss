import React from "react";
import { styled } from "goober";
import { CheckBox } from "../forms";
import CustomButton from "../CustomButton";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
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
  }
`;

function IntroductroryVideos({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Introductory Videos</p>
        <div className="button-groups">
          <CustomButton
            width="111px"
            variant="#BDBDBD"
            label="Save"
            onClick={() => saveData()}
            iconPosition="right"
            iconUrl="/images/copy-success.svg"
          />
          <div style={{ display: "flex" }}>
            <CustomButton
              width="111px"
              variant="white"
              textColor="black"
              label="Previous"
              onClick={() => goBack()}
              secondaryBtn
            />
            <div style={{ width: "20px" }} />
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
