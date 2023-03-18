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

  const base_url =`${window.base_url}/v1`;

  useEffect(()=>{

    const url = `${base_url}/my-profile/personal-information`

   

    const myHeaders = {
      "Accept": "application/json",
      "Authorization": "Bearer 18|KR91Lbh0KeDm7VsEMUGCOyNKVjGPJezJAPm3GiUM"
    };
  

    
 
    const userData = async ()=>{
      const data = await axiosFetch(url,'GET', myHeaders );
      console.log(data);
    } 
 
    userData()
  
  },[])

 

  const profilePhotoRef = useRef();


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

  const  submitForm =  async (event) => {


    event.preventDefault();
    const myHeaders = {
      "Content-Type": "multipart/form-data",
      "Authorization": "Bearer 18|KR91Lbh0KeDm7VsEMUGCOyNKVjGPJezJAPm3GiUM"
    };
   
    
    const formdata = new FormData();
    formdata.append("suffix", formdata.title);
    formdata.append("firstname", formdata.firstName);
    formdata.append("lastname", formData.lastName);
    formdata.append("middlename", formData.middleName);
    formdata.append("prefered_firstname", formData.preferredFirstName);
    formdata.append("prefered_lastname", formData.preferredLastName);
    formdata.append("avatar", profilePicture, "[PROXY]");

 
    const response = await axiosFetch(`${base_url}/onboarding/profile`, 'POST', myHeaders, formData);
    console.log(response);
      
    
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
