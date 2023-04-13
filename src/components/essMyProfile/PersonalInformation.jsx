import React, { useState } from "react";
import { styled } from "goober";
import { TextField } from "@/components/forms";
import { AccordionItem } from "@/assets/wrappers";
import { Container } from "@/components/essMyProfile/CommonStyles";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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

const PersonalInformation = ({ fieldsEdited }) => {
  const [personalInfo, showPersonalInfo] = useState(false);
  const [birthInfo, showbirthInfo] = useState(false);
  const [demographicInfo, showDemographicInfo] = useState(false);
  const [contactInfo, showContactInfo] = useState(false);
  const [homeAddressInfo, showHomeAddressInfo] = useState(false);
  const [mailingAddressInfo, showMailingAddressInfo] = useState(false);
  return (
    <Container>
      <Inner>
        <AccordionItem
          onClick={() => {
            showPersonalInfo(!personalInfo);
          }}
          className={`type-title3 ${personalInfo ? "active" : ""}`}
        >
          Personal Information{" "}
        </AccordionItem>
        {personalInfo && (
          <div className="inner-container">
            <div className="info-group">
              <div className="flexed-header">
                <p className="type-title3 title">Personal Information </p>
                <div>
                  <Button
                    bg="var(--grey-25)"
                    border="var(--lilac-400)"
                    textcolor="var(--lilac-400)"
                    rightIcon={<PenIcon fill="var(--lilac-400)" />}
                    iconcolor="var(--grey-25)"
                    width="93px"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="form-wrapper">
                <TextField
                  id="suffix"
                  label="Suffix"
                  type="text"
                  placeholder="Select Suffix"
                  className="field-flex-basis"
                  marginbottom="0"
                />
                <TextField
                  id="firstname"
                  label="First Name"
                  type="text"
                  placeholder="Enter First Name"
                  className="field-flex-basis"
                  marginbottom="0"
                />
                <TextField
                  id="middlename"
                  label="Middle Name"
                  type="text"
                  placeholder="Enter Middle Name"
                  className="field-flex-basis"
                  marginbottom="0"
                />
                <TextField
                  id="lastname"
                  label="Last Name"
                  type="text"
                  placeholder="Enter Last Name"
                  className="field-flex-basis"
                  marginbottom="0"
                />
                <TextField
                  id="firstname"
                  label="Preferred First Name"
                  type="text"
                  placeholder="Enter Preferred First Name"
                  className="field-flex-basis"
                  marginbottom="0"
                />
                <TextField
                  id="lastname"
                  label="Preferred Last Name"
                  type="text"
                  placeholder="Enter Preferred Last Name"
                  className="field-flex-basis"
                  marginbottom="0"
                />
                <TextField
                  id="employeeId"
                  label="Employee Id"
                  type="text"
                  placeholder="Enter Employee Id"
                  className="field-flex-basis"
                  marginbottom="0"
                />
              </div>
            </div>
            <ButtonGroups>
              <Button
                bg="var(--success)"
                textcolor="var(--grey-25)"
                rightIcon={<CopySuccess fill="var(--success)" />}
                iconcolor="var(--grey-25)"
                width="8.125rem"
                className="save-btn"
              >
                Update Info
              </Button>
              <div className="prev-cont-btn">
                <Button
                  bg="var(--lilac-400)"
                  textcolor="var(--grey-25)"
                  width="8.125rem"
                >
                  Next
                </Button>
              </div>
            </ButtonGroups>
          </div>
        )}

        <AccordionItem
          onClick={() => {
            showbirthInfo(!birthInfo);
          }}
          className="type-title3"
        >
          Birth Information
        </AccordionItem>

        {birthInfo && (
          <div className="form-wrapper">
            <TextField
              id="dob"
              label="Date Of Birth"
              type="text"
              placeholder="Enter Date Of Birth"
              className="field-flex-basis"
              marginbottom="0"
            />
            <TextField
              id="cob"
              label="Country Of Birth"
              type="text"
              placeholder="Enter Country Of Birth"
              className="field-flex-basis"
              marginbottom="0"
            />
            <TextField
              id="sob"
              label="State Of Birth"
              type="text"
              placeholder="Enter State Of Birth"
              className="field-flex-basis"
              marginbottom="0"
            />
          </div>
        )}

        <AccordionItem
          onClick={() => {
            showDemographicInfo(!demographicInfo);
          }}
          className="type-title3"
        >
          Demographic Information
        </AccordionItem>

        {demographicInfo && (
          <div className="form-wrapper">
            <TextField
              id="gender"
              label="Gender"
              type="text"
              placeholder="Enter Gender"
              className="field-flex-basis"
              marginbottom="0"
            />
            <TextField
              id="maritalstatus"
              label="Marital Status"
              type="text"
              placeholder="Enter Marital Status"
              className="field-flex-basis"
              marginbottom="0"
            />
            <TextField
              id="ethnicgroup"
              label="Ethnic Group"
              type="text"
              placeholder="Enter Ethnic Group"
              className="field-flex-basis"
              marginbottom="0"
            />
            <TextField
              id="nationalityh"
              label="Nationality"
              type="text"
              placeholder="Enter Nationality"
              className="field-flex-basis"
              marginbottom="0"
            />
            <TextField
              id="religion"
              label="Religion"
              type="text"
              placeholder="Enter Religion"
              className="field-flex-basis"
              marginbottom="0"
            />
          </div>
        )}

        <AccordionItem
          onClick={() => {
            showContactInfo(!contactInfo);
          }}
          className="type-title3"
        >
          Contact Information
        </AccordionItem>

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

        <AccordionItem
          onClick={() => {
            showHomeAddressInfo(!homeAddressInfo);
          }}
          className="type-title3"
        >
          Home Address
        </AccordionItem>

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
        <AccordionItem
          onClick={() => {
            showMailingAddressInfo(!mailingAddressInfo);
          }}
          className="type-title3"
        >
          Mailing Address
        </AccordionItem>

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
