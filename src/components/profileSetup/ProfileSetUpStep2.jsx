import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import { ReactComponent as LocationIcon } from "@/assets/images/location.svg";
import { TextField, SelectField } from "@/components/forms";
import { useSnapshot } from "valtio";
import store from "@/services/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateForm } from "@/utils/helpers";

const ProfileSetUpStep2 = ({setStep, step}) => {
  const snapshot = useSnapshot(store);
  const demographicInfo = snapshot?.demographicInformation;
  const countries = snapshot?.countries;
  const personalInfo = snapshot?.personalInformation;
  const [selectedValues, setSelectedValues] = useState({});

  useEffect(() => {
    store.getDemographicInformation();
    store.getCountries();
  }, []);

  useEffect(() => {
    setSelectedValues({
      gender: personalInfo?.gender_id,
      religion: personalInfo?.religion_id,
      maritalStatus: personalInfo?.marital_status_id,
      ethnic: personalInfo?.ethnic_id,
      nationality: personalInfo?.nationality
    });
  }, [personalInfo]);

  const handleSelectChange = (key, event) => {
    setSelectedValues({...selectedValues, [key]: event.target.value});
  };

  console.log()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const validationRules = {
      gender: { required: true },
      ethnic:  { required: true },
      religion:  { required: true },
      nationality:  { required: true },
      marital_status:  { required: true },
    };
    const errors = validateForm(formData, validationRules);
    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError);
      return;
    }
    const resp = await store.postDemographicInfo(formData);

    if (resp.status === "success") {
      toast.success(resp.message);
      setStep({ ...step, step1: false, step2: false, step3: true })
    } else {
      toast.error(resp?.response?.data?.message)
    }
  };

  return (
    <FormWrapper method="post" onSubmit={handleSubmit}>
      <FormLogoWrapper>
        <img src="/ess/images/barter.svg" width="85" alt="barter" />
      </FormLogoWrapper>
      <UploadImageWrapper>
        <div className="upload-title step2-3">
          <h3 className="type-title2">Profile Setup</h3>
          <h3 className="step-text type-title3">STEP 2 OF 3</h3>
        </div>
      </UploadImageWrapper>
      <InputsWrapper>
        <TextField
          id="location"
          label="Location"
          type="text"
          placeholder="Enter Location"
          icon={<LocationIcon stroke="#BBBEC4" className="input-icon icon" />}
          className="input-icon"
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
        <SelectField
          id="religion"
          name="religion"
          label="Religion"
          onChange={(e) => handleSelectChange("religion", e)}
          value={selectedValues.religion}
        >
          <option value="">Select Religion</option>
          {demographicInfo?.religion?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
      </InputsWrapper>
      <InputsWrapper>
        <SelectField
          id="gender"
          onChange={(e) => handleSelectChange("gender", e)}
          value={selectedValues.gender}
          name="gender"
          label="Gender"
        >
          <option value="">Select Gender</option>
          {demographicInfo?.genders?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
        <SelectField
          id="maritalStatus"
          name="marital_status"
          label="Marital Status"
          onChange={(e) => handleSelectChange("maritalStatus", e)}
          value={selectedValues.maritalStatus}
        >
          <option value="">Select Marital Status</option>
          {demographicInfo?.marital_status?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
      </InputsWrapper>
      <InputsWrapper>
        <SelectField
          id="nationality"
          name="nationality"
          label="Nationality"
          onChange={(e) => handleSelectChange("nationality", e)}
          value={selectedValues.nationality}
        >
          <option value="">Select Nationality</option>
          {countries?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
        <SelectField
          id="ethnicGroup"
          name="ethnic"
          label="Ethnic Group Status"
          onChange={(e) => handleSelectChange("ethnic", e)}
          value={selectedValues.ethnic}
        >
          <option value="">Select Ethnic Group</option>
          {demographicInfo?.ethnic_group?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
      </InputsWrapper>
      <Button
        type="submit"
        bg="var(--lilac-400)"
        textcolor="var(--grey-25)"
        className="submit-button"
        width="100%"
      >
        Continue
      </Button>
      <Link
        to="/"
        className="back"
        onClick={(event) => {
          event.preventDefault();
          setStep({ ...step, step1: true, step2: false, step3: false })
        }}
      >
        <p className="back">back</p>
      </Link>
      <ToastContainer />
    </FormWrapper>
  );
}

export default ProfileSetUpStep2;