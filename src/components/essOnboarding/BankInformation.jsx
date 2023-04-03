import React from "react";
import { TextField } from "@/components/forms";
import { ButtonGroups } from "@/components/EssOnboarding/CommonStyles";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { HeaderText } from "@/components/EssOnboarding/CommonStyles";
import OnboardingTemplate from "./OnboardingTemplate";

function BankInformation({ continueAction, goBack, saveData }) {
  return (
    <OnboardingTemplate>
      <div className="main-content">
        <HeaderText>
          <p className="type-title3 title">Bank Account Information</p>
          <p className="type-body2 sub-title">Bank Details</p>
        </HeaderText>
        <div className="form-wrapper">
          <TextField
            id="bankname"
            label="Bank Name"
            type="text"
            placeholder="Enter Bank Name"
            className="field-flex-basis"
          />
          <TextField
            id="accountname"
            label="Account Name"
            type="text"
            placeholder="Enter Account Name"
            className="field-flex-basis"
          />
          <TextField
            id="accountnumber"
            label="Account Number"
            type="text"
            placeholder="Enter Account Number"
            className="field-flex-basis"
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

export default BankInformation;
