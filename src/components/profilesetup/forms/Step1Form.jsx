import React, {useRef, useState, useEffect} from 'react';
import { withFormik } from 'formik';
import { FormWrapper, InputsWrapper, UploadImageWrapper, FormLogoWrapper, } from "../../../assets/wrappers";
import { TextField, SelectField, CheckBox } from "../../forms";
import { ButtonLilacFull } from "../../buttons";

const Step1Form = ({submitForm, formData, updateForm, profilePicture, setProfilePicture}) => {
  
  const [prefferedNameDisabled, setPrefferedNameDisabled] = useState(false);
  const [userInitial, setUSerInitial] = useState('BP')
  

  const profilePhotoRef = useRef();
  const preferredFirstNameRef = useRef();
  const preferredLastNameRef = useRef();

  const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];

  const disablePrefferedName = (event) => {
    if(event.target.checked){
        
        delete formData.preferredLastName;
        delete formData.preferredFirstName;
        setPrefferedNameDisabled(true);
    }else{
       
        setPrefferedNameDisabled(false);
        formData.preferredLastName = preferredLastNameRef.current.value;
        formData.preferredFirstName = preferredFirstNameRef.current.value;
    }
  }

  

const uploadProfilePhoto = (e)=>{
    const  file = e.target.files[0];
    const temp_path = URL.createObjectURL(file);
    profilePhotoRef.current.src = temp_path

    
    
    setProfilePicture(file)
    document.querySelector('#profile-photo').style.display = 'block';
}

useEffect(()=>{
    // console.log(profilePicture);
}, [prefferedNameDisabled, profilePicture]);

  return (
    <FormWrapper onSubmit={submitForm}>
        <FormLogoWrapper>
            <img src={"/images/barter.svg"} width="85" alt="barter" />
        </FormLogoWrapper>
        <UploadImageWrapper>
            <div className="upload-title">
            <h3>Profile Setup</h3>
            <h3 className="step-text">STEP 1 OF 3</h3>
            </div>
            <input type="file" id="file" accept="image/*"  onChange={uploadProfilePhoto} name="avatar"/>
            <label htmlFor="file">{userInitial  && <img src={"/images/camera.svg"} id="profile-photo" ref={profilePhotoRef} />} </label>
            <div className="upload-image-wrapper">
            <span className="upload-image-text">Upload <i className='fa fa-camera'></i></span>{" "}
            {/* <img src={"/images/camera.svg"} ref={profilePhotoRef} id="" /> */}

            </div>
        </UploadImageWrapper>
        <InputsWrapper>
            <SelectField id="title" label="Title" defaultValue={formData.title} onChange={updateForm}>
            {nameTitle.map((title) => (
                <option key={title} defaultValue={title}>
                {title}
                </option>
            ))}
            </SelectField>
            <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            onChange = {updateForm}
            defaultValue={formData.firstName}
            placeholder="Enter First Name"
            />
        </InputsWrapper>
        <InputsWrapper>
            <TextField
            id="lastName"
            label="Last Name"
            name="lastName"
            type="text"
            onChange = {updateForm}
            defaultValue={formData.lastName}
            placeholder="Enter Last Name"
            />
            <TextField
            optional
            id="middleName"
            label="Middle Name"
            name="middleName"
            type="text"
            onChange = {updateForm}
            defaultValue={formData.middleName}
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
            onChange = {updateForm}
            defaultValue={formData.preferredFirstName}
            placeholder="Enter Preferred Name"
            ref={preferredFirstNameRef}
            disabled={prefferedNameDisabled}
            />
            <TextField
            optional
            id="preferredLastName"
            label="Preferred Last Name"
            name="prefered_lastname"
            type="text"
            onChange = {updateForm}
            defaultValue={formData.preferredLastName}
            placeholder="Enter Preferred Name"
            ref={preferredLastNameRef}
            disabled={prefferedNameDisabled}
            />
        </InputsWrapper>
        <CheckBox label="No Preferred Name" onChange={disablePrefferedName} />

        <ButtonLilacFull
            type="submit"
            // onClick={() => setStep({ ...step, step1: false, step2: true })}
        >
            Continue
        </ButtonLilacFull>
        
      </FormWrapper>
  );
};



export default Step1Form;
