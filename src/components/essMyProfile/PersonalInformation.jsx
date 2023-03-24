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
      </Inner>
    </Container>
  );
};

export default PersonalInformation;
