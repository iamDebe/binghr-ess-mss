import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import { TextField, SelectField, CheckBox } from "@/components/forms";
import { ReactComponent as CameraIcon } from "@/assets/images/camera.svg";
import store from "@/services/store";
import { useSnapshot } from "valtio";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateForm, getFirstLetter } from "@/utils/helpers";
import Spinner from "@/assets/images/spinner.gif";

const ProfileSetUpStep1 = ({setStep, step}) => {
  const fileInputRef = useRef(null);
  const snapshot = useSnapshot(store);
  const personalInfo = snapshot?.personalInformation;
  const [selectedAvatar, setSelectedAvatar] = useState(personalInfo?.avatar);
  const [suffix, setSuffix] = useState(personalInfo?.suffix);
  const [isLoading, setIsLoading] = useState(false);
  const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];

  useEffect(() => {
    store.getPersonalInformation();
  }, []);

  useEffect(() => {
    setSelectedAvatar(personalInfo?.avatar);
    setSuffix(personalInfo?.suffix);
  }, [personalInfo?.avatar, personalInfo?.suffix]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setSelectedAvatar(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedAvatar(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSelectChange = (event) => {
    setSuffix(event.target.value);
  };

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    setIsLoading(true);

    if (!selectedAvatar) {
      toast.error("Avatar is required");
      setIsLoading(false);
      return;
    }

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const validationRules = {
      suffix: { required: true },
    };
    const errors = validateForm(formData, validationRules);
    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError);
      setIsLoading(false);
      return;
    }

    const resp = await store.postPersonalInfo(formData);
    setIsLoading(false);
    if (resp.status === "success") {
      toast.success(resp.message);
      setStep({ ...step, step1: false, step2: true })
    } else {
      toast.error(resp.response.data.message)
    }
  }

  return (
    <FormWrapper method="post" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormLogoWrapper>
        <img src="/ess/images/barter.svg" width="85" alt="barter" />
      </FormLogoWrapper>
      <UploadImageWrapper>
        <div className="upload-title">
          <h3 className="type-title2">Profile Setup</h3>
          <h3 className="step-text type-title3">STEP 1 OF 3</h3>
        </div>
        <input type="file" ref={fileInputRef} id="file" name="avatar" accept="image/*" onChange={handleAvatarChange} />
        {selectedAvatar ? (
          <img src={selectedAvatar} width="100" height="90" alt="Selected Avatar" />
        ) : (
          <label htmlFor="file">{getFirstLetter(personalInfo?.firstname)}{getFirstLetter(personalInfo?.lastname)}</label>
        )}
        <div className="upload-image-wrapper" onClick={() => {fileInputRef?.current.click()}}>
          <span className="upload-image-text">Upload</span>{" "}
          <CameraIcon stroke="#292D32" />
        </div>
      </UploadImageWrapper>
      <InputsWrapper>
        <SelectField
          id="title"
          name="suffix"
          value={suffix}
          onChange={handleSelectChange}
          label="Title"
        >
          {nameTitle.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </SelectField>
        <TextField
          id="firstName"
          label="First Name"
          name="firstname"
          readOnly
          defaultValue={personalInfo?.firstname}
          type="text"
          placeholder="Enter First Name"
        />
      </InputsWrapper>
      <InputsWrapper>
        <TextField
          id="lastName"
          label="Last Name"
          type="text"
          name="lastname"
          readOnly
          defaultValue={personalInfo?.lastname}
          placeholder="Enter Last Name"
        />
        <TextField
          optional
          id="middleName"
          label="Middle Name"
          name="middlename"
          defaultValue={personalInfo?.middlename}
          type="text"
          placeholder="Enter Middle Name"
        />
      </InputsWrapper>
      <InputsWrapper>
        <TextField
          optional
          id="preferredFirstName"
          label="Preferred First Name"
          name="prefered_firstname"
          defaultValue={personalInfo?.prefered_first_name}
          type="text"
          placeholder="Enter Preferred Name"
        />
        <TextField
          optional
          id="preferredLastName"
          name="prefered_lastname"
          label="Preferred Last Name"
          defaultValue={personalInfo?.preferred_last_name}
          type="text"
          placeholder="Enter Preferred Name"
        />
      </InputsWrapper>
      <CheckBox label="No Preferred Name" />
      {isLoading ? (
        <img src={Spinner} alt="spinner" width="80" style={{display: 'block', margin: '0 auto'}} />
      ) : (
        <Button
          type="submit"
          bg="var(--lilac-400)"
          textcolor="var(--grey-25)"
          className="submit-button"
          width="100%"
        >
          Continue
        </Button>
      )}
      <ToastContainer />
    </FormWrapper>
  );
}

export default ProfileSetUpStep1;
