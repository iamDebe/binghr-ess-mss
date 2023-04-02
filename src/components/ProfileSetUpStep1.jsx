import React from "react";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import { TextField, SelectField, CheckBox } from "@/components/forms";

const ProfileSetUpStep1 = ({setStep}) => {
    const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];
    return (
      <FormWrapper>
        <FormLogoWrapper>
          <img src="/ess/images/barter.svg" width="85" alt="barter" />
        </FormLogoWrapper>
        <UploadImageWrapper>
          <div className="upload-title">
            <h3>Profile Setup</h3>
            <h3 className="step-text">STEP 1 OF 3</h3>
          </div>
          <input type="file" id="file" accept="image/*" />
          <label htmlFor="file">BP</label>
          <div className="upload-image-wrapper">
            <span className="upload-image-text">Upload</span>{" "}
            <img src="/ess/images/camera.svg" />
          </div>
        </UploadImageWrapper>
        <InputsWrapper>
          <SelectField id="title" label="Title">
            {nameTitle.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </SelectField>
          <TextField
            id="firstName"
            label="First Name"
            type="text"
            placeholder="Enter First Name"
          />
        </InputsWrapper>
        <InputsWrapper>
          <TextField
            id="lastName"
            label="Last Name"
            type="text"
            placeholder="Enter Last Name"
          />
          <TextField
            optional
            id="middleName"
            label="Middle Name"
            type="text"
            placeholder="Enter Middle Name"
          />
        </InputsWrapper>
        <InputsWrapper>
          <TextField
            optional
            id="preferredFirstName"
            label="Preferred First Name"
            type="text"
            placeholder="Enter Preferred Name"
          />
          <TextField
            optional
            id="preferredLastName"
            label="Preferred Last Name"
            type="text"
            placeholder="Enter Preferred Name"
          />
        </InputsWrapper>
        <CheckBox label="No Preferred Name" />
        <Button
          type="button"
          onClick={() => setStep({ ...step, step1: false, step2: true })}
          bg="var(--lilac-400)"
          textcolor="var(--grey-25)"
          className="submit-button"
        >
          Continue
        </Button>
      </FormWrapper>
    );
}

export default ProfileSetUpStep1;