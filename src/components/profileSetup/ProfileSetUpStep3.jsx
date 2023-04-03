import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

const ProfileSetUpStep3 = ({setStep, step}) => {
  const snapshot = useSnapshot(store);
  const demographicInfo = snapshot?.demographicInformation;
  console.log(demographicInfo);

  useEffect(() => {
    store.getDemographicInformation();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const resp = await store.postOtherInfo(formData);
    console.log(resp);
    if (resp?.response?.data?.message) {
      toast(resp.response.data.message)
    } else {
      toast(resp.message);
      // setStep({ ...step, step1: false, step2: true, step3: true });
    }
  };

  return (
    <FormWrapper method="post" onSubmit={handleSubmit}>
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
          name="phone_number"
          type="number"
          placeholder="Enter Phone Number"
        />
        <TextField
          id="secondPhoneNumber"
          label="Secondary Phone Number"
          name="secondary_phone_number"
          type="number"
          placeholder="Enter Secondary Phone Number"
        />
      </InputsWrapper>
      <InputsWrapper>
        <TextField 
          id="dateOfBirth"
          name="dob"
          label="Date of birth"
          type="date"
        />
        <SelectField id="countryOfBirth" label="Country of Birth">
          <option value="">Select Country of Birth</option>
          {demographicInfo?.nationality?.map(item => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            );
          })}
        </SelectField>
      </InputsWrapper>
      <InputsWrapper>
        <TextField
        id="stateOfBirth"
        label="State of Birth"
        name="birth_state"
        type="text"
        placeholder="Enter State of Birth"
        />
      </InputsWrapper>
      <Button
        type="submit"
        className="submit-button"
        bg="var(--lilac-400)"
        textcolor="var(--grey-25)"
      >
        Continue
      </Button>
      <Link
        to="#"
        className="back"
        onClick={() =>
        setStep({ ...step, step1: false, step2: true, step3: false })
        }
      >
        <p className="back">back</p>
      </Link>
      <ToastContainer />
    </FormWrapper>
  );
}

export default ProfileSetUpStep3;
