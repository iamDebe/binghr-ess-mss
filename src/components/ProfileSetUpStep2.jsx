import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import location from "@/assets/images/location.svg";
import { TextField, SelectField } from "@/components/forms";

const ProfileSetUpStep2 = ({setStep}) => {
    return (
      <FormWrapper>
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
      </FormWrapper>
    );
}

export default ProfileSetUpStep2;