import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import { TextField } from "@/components/forms";

const ProfileSetUpStep3 = ({setStep}) => {
  return (
    <FormWrapper>
      <FormLogoWrapper>
        <img src="/ess/images/barter.svg" width="85" alt="barter" />
      </FormLogoWrapper>
      <UploadImageWrapper>
        <div className="upload-title">
        <h3>Profile Setup</h3>
        <h3 className="step-text">STEP 3 OF 3</h3>
        </div>
      </UploadImageWrapper>
      <InputsWrapper>
        <TextField
        id="phoneNumber"
        label="Phone Number"
        type="number"
        placeholder="Enter Phone Number"
        />
        <TextField
        id="secondPhoneNumber"
        label="Secondary Phone Number"
        type="number"
        placeholder="Enter Secondary Phone Number"
        />
      </InputsWrapper>
      <InputsWrapper>
        <TextField id="dateOfBirth" label="Date of birth" type="date" />
        <TextField
        id="countryOfBirth"
        label="Country of Birth"
        type="text"
        placeholder="Enter Country of Birth"
        />
      </InputsWrapper>
      <InputsWrapper>
        <TextField
        id="stateOfBirth"
        label="State of Birth"
        type="text"
        placeholder="Enter Country of Birth"
        />
      </InputsWrapper>
      {() => setStep({ ...step, step1: false, step2: true, step3: true })}
      <Button
        type="button"
        className="submit-button"
        bg="var(--lilac-400)"
        textcolor="var(--grey-25)"
      >
        Continue
      </Button>
      <Link
        to="/"
        className="back"
        onClick={() =>
        setStep({ ...step, step1: false, step2: true, step3: false })
        }
      >
        <p className="back">back</p>
      </Link>
    </FormWrapper>
  );
}

export default ProfileSetUpStep3;
