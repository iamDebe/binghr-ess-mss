import React from "react";
import { CheckBox, TextField } from "@/components/forms";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { HeaderText } from "@/components/onboarding/CommonStyles";
import OnboardingTemplate from "@/components/onboarding/OnboardingTemplate";

function AddressTwo({ continueAction, goBack, saveData }) {
  return (
    <OnboardingTemplate>
      <div className="main-content">
        <HeaderText>
          <p className="type-title3 title">Address Information 2</p>
          <p className="type-body2 sub-title">Mailing Address</p>
        </HeaderText>
        <CheckBox label="Same as home address" />
        <div className="form-wrapper">
          <TextField
            id="street"
            label="Street"
            type="text"
            placeholder="Enter Street Name"
            className="field-flex-basis"
          />
          <TextField
            id="apartment"
            label="Apartment"
            type="text"
            placeholder="Enter Apartment Number"
            className="field-flex-basis"
          />
          <TextField
            id="city"
            label="City"
            type="text"
            placeholder="Enter City Name"
            className="field-flex-basis"
          />
          <TextField
            id="state"
            label="State"
            type="text"
            placeholder="Enter State Name"
            className="field-flex-basis"
          />
          <TextField
            id="country"
            label="Country"
            type="text"
            placeholder="Enter Country Name"
            className="field-flex-basis"
          />
          <TextField
            id="postalCode"
            label="Postal Code"
            type="text"
            placeholder="Enter Postal Code"
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

export default AddressTwo;
