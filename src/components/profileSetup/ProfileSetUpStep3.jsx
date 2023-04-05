import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import { TextField, SelectField } from "@/components/forms";
import store from "@/services/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSnapshot } from "valtio";
import { validateForm } from "@/utils/helpers";

const ProfileSetUpStep3 = ({setStep, step}) => {
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedStateId, setSelectedStateId] = useState("");
  const navigate = useNavigate();
  const snapshot = useSnapshot(store);
  const countries = snapshot?.countries;
  const states = snapshot?.states;
  const personalInfo = snapshot?.personalInformation;

  useEffect(() => {
    store.getDemographicInformation();
    store.getCountries();
  }, []);

  useEffect(() => {
    setSelectedCountryId(personalInfo?.country_id);
    setSelectedStateId(personalInfo?.state_id);
  }, [personalInfo?.country_id, personalInfo?.state_id]);

  useEffect(() => {
    if (selectedCountryId) {
      store.getStates(selectedCountryId);
    }
  }, [selectedCountryId]);

  const handleSelectChange = (key, e) => {
    const value = e.target.value;
    if (key === "country") {
      store.getStates(value);
      setSelectedCountryId(value);
    } else {
      setSelectedStateId(value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const validationRules = {
      phone_number: { required: true },
      dob: { required: true },
      birth_state: { required: true },
      birth_country: { required: true },
    };
    const errors = validateForm(formData, validationRules);
    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError);
      return;
    }
    const resp = await store.postBirthInfo(formData);
    if (resp.status === "success") {
      toast.success(resp.message);
      navigate("/ess/home");
    } else {
      toast.error(resp.response.data.message)
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
          <h3 className="step-text type-title3">STEP 3 OF 3</h3>
        </div>
      </UploadImageWrapper>
      <InputsWrapper>
        <TextField
          id="phoneNumber"
          label="Phone Number"
          defaultValue={personalInfo?.phone_number_one}
          name="phone_number"
          type="number"
          placeholder="Enter Phone Number"
        />
        <TextField
          id="secondPhoneNumber"
          label="Secondary Phone Number"
          name="secondary_phone_number"
          defaultValue={personalInfo?.phone_number_one}
          type="number"
          placeholder="Enter Secondary Phone Number"
        />
      </InputsWrapper>
      <InputsWrapper>
        <TextField 
          id="dateOfBirth"
          name="dob"
          label="Date of birth"
          defaultValue={personalInfo?.dob}
          type="date"
        />
        <SelectField
          id="countryOfBirth"
          name="birth_country"
          value={selectedCountryId}
          onChange={(e) => handleSelectChange('country', e)}
          label="Country of Birth"
        >
          <option value="">Select Country of Birth</option>
          {countries?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
      </InputsWrapper>
      <InputsWrapper>
        <SelectField
          id="stateOfBirth"
          name="birth_state"
          label="State of Birth"
          value={selectedStateId}
          onChange={(e) => handleSelectChange('state', e)}
        >
          <option value="">Select State of Birth</option>
          {selectedCountryId && states[selectedCountryId]?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
      </InputsWrapper>
      <Button
        type="submit"
        className="submit-button"
        bg="var(--lilac-400)"
        textcolor="var(--grey-25)"
        width="100%"
      >
        Continue
      </Button>
      <Link
        to="/"
        className="back"
        onClick={(event) => {
          event.preventDefault();
          setStep({ ...step, step1: false, step2: true, step3: false })
        }}
      >
        <p className="back">back</p>
      </Link>
      <ToastContainer />
    </FormWrapper>
  );
}

export default ProfileSetUpStep3;
