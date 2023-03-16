import React, { useState, useEffect } from "react";
import { FormWrapper, InputsWrapper, UploadImageWrapper, FormLogoWrapper, } from "../assets/wrappers";
import { ButtonLilacFull } from "../components/buttons";
import OnboardingLayout from "../components/OnboardingLayout";
import { TextField, SelectField, CheckBox } from "../components/forms";
import location from "../assets/images/location.svg";
import { Link } from "react-router-dom";
import useAxiosFetch from "../components/customHooks/useAxiosFetch";
import { useFormik } from "formik";
import * as Yup from 'yup'


const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];
const profileSteps = {
  step1: true,
  step2: false,
  step3: false,
};

const ProfileSetup = () => {

  const formik = useFormik ({
    initialValues: {
      title: "",
      firstName: "",
      lastName: "",
      middleName: "",
      preferredFirstName: "",
      preferredLastName: "",
      location:  "",
      org1: "",
      org2: "",
      org3: "",
      org4: "",
      religion: "",
      gender: "",
      maritalStatus: "",
      nationality: "",
      ethnicGroup: "",
      phoneNumber: "",
      secondPhoneNumber: "",
      dateOfBirth: "",
      countryOfBirth: "",
      stateOfBirth: "",
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string().required('This field is required')
    // }),
    onSubmit: () => {
      console.log(values);
    }
  });


  const { data, error, isloading } = useAxiosFetch('{{dev_url}}/api/v1/onboarding/profile');
  console.log(data);
  
  const [step, setStep] = useState(profileSteps);
  return (
    <OnboardingLayout>
      <FormWrapper onSubmit={formik.handleSubmit}>
        {step.step1 && (
          <>
            {/* Step 1 content */}
            <FormLogoWrapper>
              <img src="/images/barter.svg" width="85" alt="barter" />
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
                <img src="/images/camera.svg" />
              </div>
            </UploadImageWrapper>
            <InputsWrapper>
              <SelectField id="title" label="Title" value={formik.title} onChange={formik.handleChange}>
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
                onChange = {formik.handleChange}
                value={formik.values.firstName}
                placeholder="Enter First Name"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField
                id="lastName"
                label="Last Name"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.lastName}
                placeholder="Enter Last Name"
              />
              <TextField
                optional
                id="middleName"
                label="Middle Name"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.middleName}
                placeholder="Enter Middle Name"
              />
            </InputsWrapper>

            <InputsWrapper>
              <TextField
                optional
                id="preferredFirstName"
                label="Preferred First Name"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.preferredFirstName}
                placeholder="Enter Preferred Name"
              />
              <TextField
                optional
                id="preferredLastName"
                label="Preferred Last Name"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.preferredLastName}
                placeholder="Enter Preferred Name"
              />
            </InputsWrapper>
            <CheckBox label="No Preferred Name"  />

            <ButtonLilacFull
              type="button"
              onClick={() => setStep({ ...step, step1: false, step2: true })}
            >
              Continue
            </ButtonLilacFull>
          </>
        )}
        {step.step2 && (
          <>
            {/* Step 2 content */}
            <FormLogoWrapper>
              <img src="/images/barter.svg" width="85" alt="barter" />
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
                onChange = {formik.handleChange}
                value={formik.values.location}
                placeholder="Enter Location"
                icon={location}
              />
              <TextField
                id="org1"
                label="Organization Hierarchy 1"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.org1}
                placeholder="Enter Organization Hierarchy 1"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField
                id="org2"
                label="Organization Hierarchy 2"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.org2}
                placeholder="Enter Organization Hierarchy 2"
              />
              <TextField
                id="org3"
                label="Organization Hierarchy 3"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.org3}
                placeholder="Enter Organization Hierarchy 3"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField
                id="org4"
                label="Organization Hierarchy 4"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.org4}
                placeholder="Enter Organization Hierarchy 4"
              />
              <SelectField id="religion" label="Religion" value={formik.religion} onChange={formik.handleChange}>
                <option value="">Select Religion</option>
                <option value="christian">Christian</option>
                <option value="muslim">Muslim</option>
                <option value="hindu">Hindu</option>
              </SelectField>
            </InputsWrapper>
            <InputsWrapper>
              <SelectField id="gender" label="Gender" value={formik.gender} onChange={formik.handleChange} >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonBinary">Non-Binary</option>
              </SelectField>
              <SelectField id="maritalStatus" label="Marital Status"value={formik.maritalStatus} onChange={formik.handleChange} >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorce">Divorce</option>
              </SelectField>
            </InputsWrapper>
            <InputsWrapper>
              <SelectField id="nationality" label="Nationality" value={formik.nationality} onChange={formik.handleChange}>
                <option value="">Select Nationality</option>
                <option value="nigeria">Nigeria</option>
                <option value="ghana">Ghana</option>
              </SelectField>
              <SelectField id="ethnicGroup" label="Ethnic Group Status" value={formik.ethnicGroup} onChange={formik.handleChange}>
                <option value="">Select Ethnic Group</option>
                <option value="yoruba">Yoruba</option>
                <option value="ibo">Ibo</option>
                <option value="hausa">Hausa</option>
              </SelectField>
            </InputsWrapper>

            <ButtonLilacFull
              type="button"
              onClick={() =>
                setStep({ ...step, step1: false, step2: false, step3: true })
              }
            >
              Continue
            </ButtonLilacFull>
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
              <img src="/images/barter.svg" width="85" alt="barter" />
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
                onChange = {formik.handleChange}
                value={formik.values.phoneNumber}
                placeholder="Enter Phone Number"
              />
              <TextField
                id="secondPhoneNumber"
                label="Secondary Phone Number"
                type="number"
                onChange = {formik.handleChange}
                value={formik.values.secondPhoneNumber}
                placeholder="Enter Secondary Phone Number"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField 
                id="dateOfBirth" 
                label="Date of birth" 
                type="date" 
                onChange = {formik.handleChange}
                value={formik.values.dateOfBirth}
              />
              <TextField
                id="countryOfBirth"
                label="Country of Birth"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.countryOfBirth}
                placeholder="Enter Country of Birth"
              />
            </InputsWrapper>
            <InputsWrapper>
              <TextField
                id="stateOfBirth"
                label="State of Birth"
                type="text"
                onChange = {formik.handleChange}
                value={formik.values.stateOfBirth}
                placeholder="Enter State of Birth"
              />
            </InputsWrapper>
            {() => setStep({ ...step, step1: false, step2: true, step3: true })}
            <ButtonLilacFull type="submit">Submit</ButtonLilacFull>
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
