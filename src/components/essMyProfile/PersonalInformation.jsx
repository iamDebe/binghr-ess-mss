import React, { useState } from "react";
import { styled } from "goober";
import { TextField } from "../forms";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  .type-title3 {
    color: var(--grey-400);
  }
  .type-body2 {
    color: var(--grey-300);
  }
  .main-text-div {
    display: flex;
    max-width: 100%;
  }
  .text-div {
    padding-right: 30px;
    width: 230px;
  }
`;

const PersonalInformation = ({ continueAction, goBack, saveData }) => {
  const [personalInfo, showPersonalInfo] = useState(false);
  const [birthInfo, showbirthInfo] = useState(false);
  const [demographicInfo, showDemographicInfo] = useState(false);
  const [contactInfo, showContactInfo] = useState(false);
  const [homeAddressInfo, showHomeAddressInfo] = useState(false);
  const [mailingAddressInfo, showMailingAddressInfo] = useState(false);
  return (
    <Container>
      <Inner>
        <p
          onClick={() => {
            showPersonalInfo(!personalInfo);
          }}
          className="type-title3"
        >
          Personal Information{" "}
        </p>
        {personalInfo && (
          <div>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="suffix"
                  label="Suffix"
                  type="text"
                  placeholder="Select Suffix"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="firstname"
                  label="First Name"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="middlename"
                  label="Middle Name"
                  type="text"
                  placeholder="Enter Middle Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="lastname"
                  label="last Name"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="firstname"
                  label="Preffered First Name"
                  type="text"
                  placeholder="Enter Preffered First Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="lastname"
                  label="Preffered Last Name"
                  type="text"
                  placeholder="Enter Preffered Last Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="employeeId"
                  label="Employee Id"
                  type="text"
                  placeholder="Enter Employee Id"
                />
              </div>
            </div>
          </div>
        )}

        <p
          onClick={() => {
            showbirthInfo(!birthInfo);
          }}
          className="type-title3"
        >
          Birth Information
        </p>

        {birthInfo && (
          <div className="main-text-div">
            <div className="text-div">
              <TextField
                id="dob"
                label="Date Of Birth"
                type="text"
                placeholder="Enter Date Of Birth"
              />
            </div>
            <div className="text-div">
              <TextField
                id="cob"
                label="Country Of Birth"
                type="text"
                placeholder="Enter Country Of Birth"
              />
            </div>
            <div className="text-div">
              <TextField
                id="sob"
                label="State Of Birth"
                type="text"
                placeholder="Enter State Of Birth"
              />
            </div>
          </div>
        )}

        <p
          onClick={() => {
            showDemographicInfo(!demographicInfo);
          }}
          className="type-title3"
        >
          Demographic Information
        </p>

        {demographicInfo && (
          <>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="gender"
                  label="Gender"
                  type="text"
                  placeholder="Enter Gender"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="maritalstatus"
                  label="Marital Status"
                  type="text"
                  placeholder="Enter Marital Status"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="ethnicgroup"
                  label="Ethnic Group"
                  type="text"
                  placeholder="Enter Ethnic Group"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="nationalityh"
                  label="Nationality"
                  type="text"
                  placeholder="Enter Nationality"
                />
              </div>
            </div>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="religion"
                  label="Religion"
                  type="text"
                  placeholder="Enter Religion"
                />
              </div>
            </div>
          </>
        )}

        <p
          onClick={() => {
            showContactInfo(!contactInfo);
          }}
          className="type-title3"
        >
          Contact Information
        </p>

        {contactInfo && (
          <div className="main-text-div">
            <div className="text-div">
              <TextField
                id="phonenumber"
                label="Phone Number"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="text-div">
              <TextField
                id="secondaryphonenumber"
                label="Secondary Phone Number"
                type="text"
                placeholder="Enter Secondary Phone Numbe"
              />
            </div>
          </div>
        )}

        <p
          onClick={() => {
            showHomeAddressInfo(!homeAddressInfo);
          }}
          className="type-title3"
        >
          Home Address
        </p>

        {homeAddressInfo && (
          <>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="street"
                  label="Street"
                  type="text"
                  placeholder="Enter Street Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="apartment"
                  label="Apartment"
                  type="text"
                  placeholder="Enter Apartment Number"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="city"
                  label="City"
                  type="text"
                  placeholder="Enter City Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="state"
                  label="State"
                  type="text"
                  placeholder="Enter State Name"
                />
              </div>
            </div>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="country"
                  label="Country"
                  type="text"
                  placeholder="Enter Country Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="postalCode"
                  label="Postal Code"
                  type="text"
                  placeholder="Enter Postal Code"
                />
              </div>
            </div>
          </>
        )}
        <p
          onClick={() => {
            showMailingAddressInfo(!mailingAddressInfo);
          }}
          className="type-title3"
        >
          Mailing Address
        </p>

        {mailingAddressInfo && (
          <>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="street"
                  label="Street"
                  type="text"
                  placeholder="Enter Street Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="apartment"
                  label="Apartment"
                  type="text"
                  placeholder="Enter Apartment Number"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="city"
                  label="City"
                  type="text"
                  placeholder="Enter City Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="state"
                  label="State"
                  type="text"
                  placeholder="Enter State Name"
                />
              </div>
            </div>
            <div className="main-text-div">
              <div className="text-div">
                <TextField
                  id="country"
                  label="Country"
                  type="text"
                  placeholder="Enter Country Name"
                />
              </div>
              <div className="text-div">
                <TextField
                  id="postalCode"
                  label="Postal Code"
                  type="text"
                  placeholder="Enter Postal Code"
                />
              </div>
            </div>
          </>
        )}
      </Inner>
    </Container>
  );
};

export default PersonalInformation;
