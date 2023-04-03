import React, { useEffect, useState } from "react";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import OnboardingLayout from "@/components/OnboardingLayout";
import { TextField, SelectField, CheckBox } from "@/components/forms";
import location from "@/assets/images/location.svg";
import { Link } from "react-router-dom";
import Button from "@/components/button";

const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];
const profileSteps = {
  step1: true,
  step2: false,
  step3: false,
};

    const ProfileSetup = ()=>{
  const [step, setStep] = useState(profileSteps);
  return (
    <OnboardingLayout>
      <FormWrapper>
        {step.step1 && (
          <>
            {/* Step 1 content */}
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
          </>
        )}
        {step.step2 && (
          <>
            {/* Step 2 content */}
            <FormLogoWrapper>
              <img src="/ess/images/barter.svg" width="85" alt="barter" />
            </FormLogoWrapper>
            <UploadImageWrapper>
              <div className="upload-title">
                <h3>Profile Setup</h3>
                <h3 className="step-text">STEP 2 OF 3</h3>
              </div>
            </UploadImageWrapper>
            <InputsWrapper>
              <TextField
                id="location"
                label="Location"
                type="text"
                placeholder="Enter Location"
                icon={location}
              />
              <TextField
                id="org1"
                label="Organization Hierarchy 1"
                type="text"
                placeholder="Enter Organization Hierarchy 1"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField
                id="org2"
                label="Organization Hierarchy 2"
                type="text"
                placeholder="Enter Organization Hierarchy 2"
              />
              <TextField
                id="org3"
                label="Organization Hierarchy 3"
                type="text"
                placeholder="Enter Organization Hierarchy 3"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField
                id="org4"
                label="Organization Hierarchy 4"
                type="text"
                placeholder="Enter Organization Hierarchy 4"
              />
              <SelectField id="religion" label="Religion">
                <option value="">Select Religion</option>
                <option value="christian">Christian</option>
                <option value="muslim">Muslim</option>
                <option value="hindu">Hindu</option>
              </SelectField>
            </InputsWrapper>
            <InputsWrapper>
              <SelectField id="gender" label="Gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonBinary">Non-Binary</option>
              </SelectField>
              <SelectField id="maritalStatus" label="Marital Status">
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorce">Divorce</option>
              </SelectField>
            </InputsWrapper>
            <InputsWrapper>
              <SelectField id="nationality" label="Nationality">
                <option value="">Select Nationality</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
              </SelectField>
              <SelectField id="ethnicGroup" label="Ethnic Group Status">
                <option value="">Select Ethnic Group</option>
                <option value="yoruba">Yoruba</option>
                <option value="ibo">Ibo</option>
                <option value="hausa">Hausa</option>
              </SelectField>
            </InputsWrapper>

            <Button
              type="button"
              onClick={() =>
                setStep({ ...step, step1: false, step2: false, step3: true })
              }
              bg="var(--lilac-400)"
              textcolor="var(--grey-25)"
              className="submit-button"
            >
              Continue
            </Button>
            <Link
              to="/"
              className="back"
              onClick={() =>
                setStep({ ...step, step1: true, step2: false, step3: false })
              }
            >
              <p className="back">back</p>
            </Link>
          </>
        )}
        {step.step3 && (
          <>
            {/* Step 3 content */}
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
          </>
        )}
      </FormWrapper>
    </OnboardingLayout>
  );
};

export default ProfileSetup;
