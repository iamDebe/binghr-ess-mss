import React, { useState, useEffect, useRef } from "react";
import { ButtonLilacFull } from "../buttons";
import OnboardingLayout from "../OnboardingLayout";
import { TextField, SelectField, CheckBox } from "../forms";
import location from "../../assets/images/location.svg";
import { Link } from "react-router-dom";
import axiosFetch from "../customHooks/useAxiosFetch";
import { withFormik  } from "formik";
import * as Yup from "yup"
import Step1Form from "./forms/Step1Form";

const nameTitle = ["Select Title", "Dr", "Mr.", "Mrs.", "Ms."];
const profileSteps = {
  step1: true,
  step2: false,
  step3: false,
};

const ProfileStep1 = () => {

  const profilePhotoRef = useRef();

  const base_url =`${window.base_url}/v1`;

  const [ profilePicture, setProfilePicture ] = useState('');

  const [formData, setFormData] =  useState({
    title: "",
    firstName: "",
    lastName: "",
    middleName: "",
    preferredFirstName: "",
    preferredLastName: "",
    profilePhoto:'',
  })

 

  const updateForm = (event) => {
    // console.log(event.target);
    const {id, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [id]: type === "checkbox" ? checked : value
        }
    })
    console.log(formData)
  }

  const  submitForm = () => {

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 11|kFWdszV59FxQldpioBwTxSksS53LoAZg3LXmSjhK");
    
    const formdata = new FormData();
    formdata.append("suffix", form.title);
    formdata.append("firstname", formdata.firstName);
    formdata.append("lastname", form.lastName);
    formdata.append("middlename", form.middleName);
    formdata.append("prefered_firstname", form.preferredFirstName);
    formdata.append("prefered_lastname", form.preferredLastName);
    formdata.append("avatar", profilePicture, "[PROXY]");

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      console.log(requestOptions);
      const { data, error, isloading } = axiosFetch(`${base_url}/onboarding/profile`, requestOptions);

      // fetch("https://company.binghr.io/api/v1/onboarding/profile", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
  }


  
  const [step, setStep] = useState(profileSteps);
  return (
 
    <Step1Form submitForm={submitForm} formData={formData} updateForm={updateForm}/>
  );
};

export default ProfileStep1;
