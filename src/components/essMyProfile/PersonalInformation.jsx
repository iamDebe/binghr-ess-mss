import React, { useState } from "react";
import { TextField } from "@/components/forms";
import { AccordionItem } from "@/assets/wrappers";
import { Container, Inner } from "@/components/essMyProfile/CommonStyles";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";

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
        >
          <p className={`type-title3 title-box ${personalInfo ? "active" : ""}`}>
            Personal Information
          </p>
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
                      width="5.75rem"
                      disabled
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
                    width="6.875rem"
                    onClick={() => showbirthInfo(!birthInfo)}
                  >
                    Next
                  </Button>
                </div>
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>

        <AccordionItem
          onClick={() => {
            showbirthInfo(!birthInfo);
          }}
        >
          <p className={`type-title3 title-box ${birthInfo ? "active" : ""}`}>
            Birth Information
          </p>
          {birthInfo && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Birth Information </p>
                  <div>
                    <Button
                      bg="var(--grey-25)"
                      border="var(--lilac-400)"
                      textcolor="var(--lilac-400)"
                      rightIcon={<PenIcon fill="var(--lilac-400)" />}
                      iconcolor="var(--grey-25)"
                      width="5.75rem"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
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
                    border="var(--lilac-400)"
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    width="6.875rem"
                    onClick={() => showPersonalInfo(!personalInfo)}
                  >
                    Previous
                  </Button>
                  <Button
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    width="6.875rem"
                    onClick={() => showDemographicInfo(!demographicInfo)}
                  >
                    Next
                  </Button>
                </div>
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>

        <AccordionItem
          onClick={() => {
            showDemographicInfo(!demographicInfo);
          }}
        >
          <p className={`type-title3 title-box ${demographicInfo ? "active" : ""}`}>
            Demographic Information
          </p>
          {demographicInfo && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Demographic Information </p>
                  <div>
                    <Button
                      bg="var(--grey-25)"
                      border="var(--lilac-400)"
                      textcolor="var(--lilac-400)"
                      rightIcon={<PenIcon fill="var(--lilac-400)" />}
                      iconcolor="var(--grey-25)"
                      width="5.75rem"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
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
                    border="var(--lilac-400)"
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    width="6.875rem"
                    onClick={() => showbirthInfo(!birthInfo)}
                  >
                    Previous
                  </Button>
                  <Button
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    width="6.875rem"
                    onClick={() => showContactInfo(!contactInfo)}
                  >
                    Next
                  </Button>
                </div>
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>

        <AccordionItem
          onClick={() => {
            showContactInfo(!contactInfo);
          }}
        >
          <p className={`type-title3 title-box ${contactInfo ? "active" : ""}`}>
            Contact Information
          </p>
          {contactInfo && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Contact Information </p>
                  <div>
                    <Button
                      bg="var(--grey-25)"
                      border="var(--lilac-400)"
                      textcolor="var(--lilac-400)"
                      rightIcon={<PenIcon fill="var(--lilac-400)" />}
                      iconcolor="var(--grey-25)"
                      width="5.75rem"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="form-wrapper">
                <TextField
                    id="phonenumber"
                    label="Phone Number"
                    type="text"
                    placeholder="Enter Phone Number"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="secondaryphonenumber"
                    label="Secondary Phone Number"
                    type="text"
                    placeholder="Enter Secondary Phone Number"
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
                    border="var(--lilac-400)"
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    width="6.875rem"
                    onClick={() => showDemographicInfo(!demographicInfo)}
                  >
                    Previous
                  </Button>
                  <Button
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    width="6.875rem"
                    onClick={() => showHomeAddressInfo(!homeAddressInfo)}
                  >
                    Next
                  </Button>
                </div>
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>

        <AccordionItem
          onClick={() => {
            showHomeAddressInfo(!homeAddressInfo);
          }}
        >
          <p className={`type-title3 title-box ${homeAddressInfo ? "active" : ""}`}>
            Home Address
          </p>
          {homeAddressInfo && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Home Address </p>
                  <div>
                    <Button
                      bg="var(--grey-25)"
                      border="var(--lilac-400)"
                      textcolor="var(--lilac-400)"
                      rightIcon={<PenIcon fill="var(--lilac-400)" />}
                      iconcolor="var(--grey-25)"
                      width="5.75rem"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="form-wrapper">
                  <TextField
                    id="street"
                    label="Street"
                    type="text"
                    placeholder="Enter Street Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="apartment"
                    label="Apartment"
                    type="text"
                    placeholder="Enter Apartment Number"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="city"
                    label="City"
                    type="text"
                    placeholder="Enter City Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="state"
                    label="State"
                    type="text"
                    placeholder="Enter State Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="country"
                    label="Country"
                    type="text"
                    placeholder="Enter Country Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="postalCode"
                    label="Postal Code"
                    type="text"
                    placeholder="Enter Postal Code"
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
                    border="var(--lilac-400)"
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    width="6.875rem"
                    onClick={() => showContactInfo(!contactInfo)}
                  >
                    Previous
                  </Button>
                  <Button
                    bg="var(--lilac-400)"
                    textcolor="var(--grey-25)"
                    width="6.875rem"
                    onClick={() => showMailingAddressInfo(!mailingAddressInfo)}
                  >
                    Next
                  </Button>
                </div>
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>
        
        <AccordionItem
          onClick={() => {
            showMailingAddressInfo(!mailingAddressInfo);
          }}
        >
          <p className={`type-title3 title-box ${mailingAddressInfo ? "active" : ""}`}>
            Mailing Address
          </p>
          {mailingAddressInfo && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Mailing Address </p>
                  <div>
                    <Button
                      bg="var(--grey-25)"
                      border="var(--lilac-400)"
                      textcolor="var(--lilac-400)"
                      rightIcon={<PenIcon fill="var(--lilac-400)" />}
                      iconcolor="var(--grey-25)"
                      width="5.75rem"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="form-wrapper">
                  <TextField
                    id="street"
                    label="Street"
                    type="text"
                    placeholder="Enter Street Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="apartment"
                    label="Apartment"
                    type="text"
                    placeholder="Enter Apartment Number"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="city"
                    label="City"
                    type="text"
                    placeholder="Enter City Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="state"
                    label="State"
                    type="text"
                    placeholder="Enter State Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="country"
                    label="Country"
                    type="text"
                    placeholder="Enter Country Name"
                    className="field-flex-basis"
                    marginbottom="0"
                  />
                  <TextField
                    id="postalCode"
                    label="Postal Code"
                    type="text"
                    placeholder="Enter Postal Code"
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
                    border="var(--lilac-400)"
                    bg="var(--white)"
                    textcolor="var(--lilac-400)"
                    width="6.875rem"
                    onClick={() => showHomeAddressInfo(!homeAddressInfo)}
                  >
                    Previous
                  </Button>
                </div>
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>
      </Inner>
    </Container>
  );
};

export default PersonalInformation;
