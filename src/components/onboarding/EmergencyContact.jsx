import React from "react";
import { TextField } from "@/components/forms";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { HeaderText } from "@/components/onboarding/CommonStyles";
import OnboardingTemplate from "@/components/onboarding/OnboardingTemplate";

function EmergencyContact({ continueAction, goBack, saveData }) {
  return (
    <OnboardingTemplate>
      <div className="main-content">
        <HeaderText>
          <p className="type-title3 title">Emergency Contact Information</p>
          <p className="type-body2 sub-title">Next of Kin</p>
        </HeaderText>
        <div className="form-wrapper">
          <TextField
            id="firstname"
            label="Next of Kin First Name"
            type="text"
            placeholder="Enter Next of Kin First Name"
            className="field-flex-basis"
            marginbottom="0"
          />
          <TextField
            id="firstname"
            label="Next of Kin Last Name"
            type="text"
            placeholder="Enter Next of Kin Last Name"
            className="field-flex-basis"
            marginbottom="0"
          />
          <TextField
            id="phoneNumber"
            label="Telephone Number"
            type="text"
            placeholder="Enter Telephone Number"
            className="field-flex-basis"
            marginbottom="0"
          />
          <TextField
            id="homeAddress"
            label="Home Address"
            type="text"
            placeholder="Enter Home Address"
            className="field-flex-basis"
            marginbottom="0"
          />
          <TextField
            id="office"
            label="Office Address"
            type="text"
            placeholder="Enter Office Address"
            className="field-flex-basis"
            marginbottom="0"
          />
        </div>
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

export default EmergencyContact;
