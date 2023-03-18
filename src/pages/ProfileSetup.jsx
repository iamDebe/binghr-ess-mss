import React, { useState, useEffect } from "react";
import { FormWrapper, InputsWrapper, UploadImageWrapper, FormLogoWrapper, } from "../assets/wrappers";
import { ButtonLilacFull } from "../components/buttons";
import OnboardingLayout from "../components/OnboardingLayout";
import { TextField, SelectField, CheckBox } from "../components/forms";
import location from "../assets/images/location.svg";
import { Link } from "react-router-dom";
import axiosFetch from "../components/customHooks/useAxiosFetch";
import { useFormik } from "formik";
import * as Yup from "yup"
import ProfileStep1 from '../components/onboarding/ProfileStep1';

const profileSteps = {
  step1: true,
  step2: false,
  step3: false,
};

const ProfileSetup = () => {

  const [step, setStep] = useState(profileSteps);
  return (
    <OnboardingLayout>
      
        <ProfileStep1 />
      
    </OnboardingLayout>
  );
};

export default ProfileSetup;
