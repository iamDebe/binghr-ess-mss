import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import {
  FormWrapper,
  InputsWrapper,
  UploadImageWrapper,
  FormLogoWrapper,
} from "@/assets/wrappers";
import { TextField, SelectField, CheckBox } from "@/components/forms";
import store from "@/services/store";
import { useSnapshot } from "valtio";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileSetUpStep1 = ({setStep, step}) => {
  const fileInputRef = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const snapshot = useSnapshot(store);
  const personalInfo = snapshot?.personalInformation;
  const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];

  useEffect(() => {
    store.getPersonalInformation();
  }, []);

  const getFirstLetter = (text) => {
    return text ? text.charAt(0).toUpperCase() : '';
  }

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

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if (!selectedAvatar) {
      toast("Avatar is required");
      return;
    }

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    if (formData.get('suffix') === "Select Title") {
      toast("Title is required");
      return;
    }
    const resp = await store.postPersonalInfo(formData);
    console.log(resp);
    if (resp.errors) {
      toast(resp.response.data.message)
    } else {
      toast(resp.message);
      setStep({ ...step, step1: false, step2: true })
    }
  }

  return (
    <FormWrapper method="post" onSubmit={handleSubmit} encType="multipart/form-data">
      <FormLogoWrapper>
        <img src="/ess/images/barter.svg" width="85" alt="barter" />
      </FormLogoWrapper>
      <UploadImageWrapper>
        <div className="upload-title">
          <h3>Profile Setup</h3>
          <h3 className="step-text">STEP 1 OF 3</h3>
        </div>
        <input type="file" ref={fileInputRef} id="file" name="avatar" accept="image/*" onChange={handleAvatarChange} />
        {selectedAvatar ? (
          <img src={selectedAvatar} width="100" height="90" alt="Selected Avatar" />
        ) : (
          <label htmlFor="file">{getFirstLetter(personalInfo?.firstname)}{getFirstLetter(personalInfo?.lastname)}</label>
        )}
        <div className="upload-image-wrapper" onClick={() => {fileInputRef?.current.click()}}>
          <span className="upload-image-text">Upload</span>{" "}
          <img src="/ess/images/camera.svg" />
        </div>
      </UploadImageWrapper>
      <InputsWrapper>
        <SelectField id="title" name="suffix" label="Title">
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
          type="text"
          placeholder="Enter Preferred Name"
        />
        <TextField
          optional
          id="preferredLastName"
          name="prefered_lastname"
          label="Preferred Last Name"
          type="text"
          placeholder="Enter Preferred Name"
        />
      </InputsWrapper>
      <CheckBox label="No Preferred Name" />
      <Button
        type="submit"
        bg="var(--lilac-400)"
        textcolor="var(--grey-25)"
        className="submit-button"
      >
        Continue
      </Button>
      <ToastContainer />
    </FormWrapper>
  );
}

export default ProfileSetUpStep1;
