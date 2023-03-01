import React from "react";
import { Link } from "react-router-dom";
import { SignupButton, FormLogo, FormWrapper, InputField, InputWrapper, UploadImageWrapper } from "../components/commonStyles";
import SignupLayout from "../components/SignupLayout";

const ProfileSetup = () => {
  return (
    <SignupLayout>
      <FormWrapper>
        <FormLogo>
          <img src="/images/barter.svg" width="85" alt="barter" />
        </FormLogo>
        <UploadImageWrapper>
          <h3 className="upload-title">Profile Setup</h3>
          <input type="file" id="file" accept="image/*" />
          <label htmlFor="file">BP</label>
          <div className="upload-image-wrapper">
            <span className="upload-image-text">Upload</span>{" "}
            <img src="/images/camera.svg" />
          </div>
        </UploadImageWrapper>
        <InputWrapper>
          <InputField>
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </InputField>
          <InputField>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name" />
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputField>
            <label>Location</label>
            <input type="text" placeholder="Enter Location" />
            <img src="/images/location.svg" className="input-icon icon" />
          </InputField>
          <InputField>
            <label>Branch</label>
            <input type="text" placeholder="Enter Branch" />
            <img src="/images/branch.svg" className="input-icon icon" />
          </InputField>
        </InputWrapper>
        <InputWrapper>
          <InputField>
            <label>Job</label>
            <input type="text" placeholder="Enter Job" />
          </InputField>
          <InputField>
            <label>Hire Date</label>
            <input type="date" placeholder="Enter Date" />
            <img src="/images/date.svg" className="input-icon icon" />
          </InputField>
        </InputWrapper>

        <SignupButton>Continue</SignupButton>
        <Link to="/">
          <p className="skip">Skip</p>
        </Link>
      </FormWrapper>
    </SignupLayout>
  );
};

export default ProfileSetup;
