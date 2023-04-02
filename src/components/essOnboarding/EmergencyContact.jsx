import React from "react";
import { styled } from "goober";
import CustomButton from "@/components/CustomButton";
import { TextField } from "@/components/forms";
import Spacer from "@/components/Spacer";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
  .top-border {
    width: 65%;
    border-top: 7px solid #d2446e;
    top: 0;
    border-radius: 4px 0.5px 4px 0.5px;
  }
`;

const Inner = styled("div")`
  width: 1030px;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  @media only screen and (min-width: 375px) and (max-width: 969px) {
    width: 100%;
  }
  .type-title3 {
    color: var(--grey-400);
  }
  .type-body2 {
    color: var(--grey-300);
  }
  .button-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    div {
      display: flex;
      @media only screen and (min-width: 375px) and (max-width: 969px) {
        flex-wrap: wrap;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
  .main-text-div {
    display: flex;
    max-width: 100%;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  .text-div {
    padding-right: 30px;
    width: 230px;
  }
`;

function EmergencyContact({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Emergency Contact Information</p>
        <p className="type-body2">Next of Kin</p>
        <div className="main-text-div">
          <div className="text-div">
            <TextField
              id="firstname"
              label="Next of Kin First Name"
              type="text"
              placeholder="Enter Next of Kin First Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="firstname"
              label="Next of Kin Last Name"
              type="text"
              placeholder="Enter Next of Kin Last Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="phoneNumber"
              label="Telephone Number"
              type="text"
              placeholder="Enter Telephone Number"
            />
          </div>
          <div className="text-div">
            <TextField
              id="homeAddress"
              label="Home Address"
              type="text"
              placeholder="Enter Home Address"
            />
          </div>
        </div>
        <div className="main-text-div">
          <div className="text-div">
            <TextField
              id="office"
              label="Office Address"
              type="text"
              placeholder="Enter Office Address"
            />
          </div>
        </div>
        <div className="button-groups">
          <CustomButton
            width="111px"
            variant="#BDBDBD"
            label="Save"
            onClick={() => saveData()}
            iconPosition="right"
            iconUrl="/ess/images/copy-success.svg"
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

export default EmergencyContact;
