import React, { useState, useEffect, useRef } from "react";
import axiosFetch from "../../utils/useAxiosFetch";
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

  const [profilePicture, setProfilePicture] = useState('');

  const [formData, setFormData] =  useState({
    title: "",
    firstName: "",
    lastName: "",
    middleName: "",
    preferredFirstName: "",
    preferredLastName: "",
    profilePhoto: profilePicture,
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

  const  submitForm = (event) => {
    // console.log('here')
    event.preventDefault();
    const myHeaders = {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer 17|FSi8XfENKsWhaZysFNtRWQydy8hOuotqas1ClQje"
    };
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Authorization", "Bearer 12|7tZtAEekQfwFoVb00ob9IZnXntDlfapWEHfZPORl");
    
    const formdata = new FormData();
    formdata.append("suffix", formdata.title);
    formdata.append("firstname", formdata.firstName);
    formdata.append("lastname", formData.lastName);
    formdata.append("middlename", formData.middleName);
    formdata.append("prefered_firstname", formData.preferredFirstName);
    formdata.append("prefered_lastname", formData.preferredLastName);
    formdata.append("avatar", profilePicture, "[PROXY]");

    console.log(formData);

      // const requestOptions = {
      //   method: 'POST',
      //   body: formdata,
      //   redirect: 'follow'
      // };

      // console.log(requestOptions);
      const response = axiosFetch(`${base_url}/onboarding/profile`, formData, myHeaders);
      
      // fetch("https://company.binghr.io/api/v1/onboarding/profile", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
  }


  
  const [step, setStep] = useState(profileSteps);

  useEffect(()=>{
    console.log(profilePicture);
}, [profilePicture]);
  return (
 
    <Step1Form submitForm={submitForm} formData={formData} updateForm={updateForm} profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
  );
};

export default ProfileStep1;
