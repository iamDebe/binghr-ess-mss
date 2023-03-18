import React, {useRef, useState} from 'react';
import { withFormik } from 'formik';
import { FormWrapper, InputsWrapper, UploadImageWrapper, FormLogoWrapper, } from "../../../assets/wrappers";
import { TextField, SelectField, CheckBox } from "../../forms";
import { ButtonLilacFull } from "../../buttons";

const Step1Form = (props) => {
  const {
    // values,
    // touched,
    // errors,
    updateForm,
    formData,
  } = props;

  const [prefferedNameDisabled, setPrefferedNameDisabled] = useState(true);

  const profilePhotoRef = useRef();
  const preferredFirstNameRef = useRef();
  const preferredLastNameRef = useRef();

  const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];

  const disablePrefferedName = (event) => {
    if(event.target.checked){
        delete formData.preferredLastName;
        delete formData.preferredFirstName;
        setPrefferedNameDisabled(false);
    }else{
        setPrefferedNameDisabled(true);
        formData.preferredLastName = preferredLastNameRef.current.value;
        formData.preferredFirstName = preferredFirstNameRef.current.value;
    }
  }

const uploadProfilePhoto = (e)=>{
    const  file = e.target.files[0];
    const temp_path = URL.createObjectURL(file);
    profilePhotoRef.current.src = temp_path
    setProfilePicture(file)
}

  return (
    <FormWrapper >
        <FormLogoWrapper>
            <img src="/images/barter.svg" width="85" alt="barter" />
        </FormLogoWrapper>
        <UploadImageWrapper>
            <div className="upload-title">
            <h3>Profile Setup</h3>
            <h3 className="step-text">STEP 1 OF 3</h3>
            </div>
            <input type="file" id="file" accept="image/*"  onChange={uploadProfilePhoto} />
            <label htmlFor="file">BP</label>
            <div className="upload-image-wrapper">
            <span className="upload-image-text">Upload</span>{" "}
            <img src={"/images/camera.svg" } ref={profilePhotoRef} id="profile-photo" />
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
            type="text"
            onChange = {updateForm}
            defaultValue={formData.lastName}
            placeholder="Enter Last Name"
            />
            <TextField
            optional
            id="middleName"
            label="Middle Name"
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
            type="text"
            onChange = {updateForm}
            defaultValue={formData.preferredFirstName}
            placeholder="Enter Preferred Name"
            ref={preferredFirstNameRef}
            />
            <TextField
            optional
            id="preferredLastName"
            label="Preferred Last Name"
            type="text"
            onChange = {updateForm}
            defaultValue={formData.preferredLastName}
            placeholder="Enter Preferred Name"
            ref={preferredLastNameRef}
            />
        </InputsWrapper>
        <CheckBox label="No Preferred Name"  />

        <ButtonLilacFull
            type="button"
            onClick={formData.handleSubmit}
            // onClick={() => setStep({ ...step, step1: false, step2: true })}
        >
            Continue
        </ButtonLilacFull>
        
      </FormWrapper>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
});

export default Step1Form;