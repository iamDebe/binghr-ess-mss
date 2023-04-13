import React, { useState } from "react";
import { Container, Inner } from "@/components/essMyProfile/CommonStyles";
import Button from "@/components/button";
import { TextField } from "@/components/forms";
import { AccordionItem } from "@/assets/wrappers";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";

const JobInformation = () => {
  const [tab1, showTab1] = useState(false);
  const [tab2, showTab2] = useState(false);
  return (
    <Container>
      <Inner>
        <p className="type-title2">Job Information </p>
        <AccordionItem
          onClick={() => {
            showTab1(!tab1);
          }}
        >
          <p className={`type-title3 title-box ${tab1 ? "active" : ""}`}>
            Job Information  Effective as of 3-14-2023
          </p>
          {tab1 && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Organisation Information  </p>
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
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>

        <AccordionItem
          onClick={() => {
            showTab2(!tab2);
          }}
        >
          <p className={`type-title3 title-box ${tab2 ? "active" : ""}`}>
            Job Information  Effective as of 7-12-2021 
          </p>
          {tab2 && (
            <div className="inner-container">
              <div className="info-group">
                <div className="flexed-header">
                  <p className="type-title3 title">Organisation Information  </p>
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
              </ButtonGroups>
            </div>
          )}
        </AccordionItem>
      </Inner>
    </Container>
  );
};

export default JobInformation;
