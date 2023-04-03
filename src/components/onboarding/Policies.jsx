import React, { useState } from "react";
import { styled } from "goober";
import CustomButton from "@/components/CustomButton";
import { CheckBox, TextField } from "@/components/forms";
import ContainerTopBorder from "@/components/ContainerTopBorder";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { Container, Inner, HeaderText } from "@/components/onboarding/CommonStyles";

function Policies({ continueAction, goBack, saveData }) {
  const [showPayrollPolicyForm, setShowPayrollPolicyForm] = useState(false);
  const [showCompensationPolicyForm, setShowCompensationPolicyForm] =
    useState(false);
  const [showTandAPolicyForm, setShowTandAPolicyForm] = useState(false);

  // TO SET THE PILICIES STATUS (EITHER SIGNED OR UNSIGNED, THAT DATA WILL COME FROM THE API AFTER )

  return (
    <Container>
      <div className="div">
        {!showPayrollPolicyForm &&
          !showCompensationPolicyForm &&
          !showTandAPolicyForm && <ContainerTopBorder />}
        <Inner>
          {showPayrollPolicyForm && (
            <>
              <p className="type-title3 title">Payroll Policy</p>
              <div className="form-div">
                <p className="type-body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ut malesuada massa. Sed sodales arcu in eleifend
                  aliquam. Nam id ex viverra, mattis turpis sed, ullamcorper
                  metus. Integer fermentum, sapien sed fringilla condimentum,
                  diam dui ultricies risus. sit amet, consectetur adipiscing
                  elit. Quisque ut malesuada massa. Sed sodales arcu in eleifend
                  aliquam. Nam id ex viverra, mattis turpis sed, ullamcorper
                  metus. Integer fermentum, sapien sed fringilla condimentum,
                  diam dui ultricies risus.
                </p>
              </div>
              <div className="flexed-div">
                <div>
                  <CheckBox label="I agree to payrol policy" />
                </div>
                <div className="sign-div">
                  <p className="type-title3">Type Full Name as signature </p>
                  <div className="fn-div">
                    <TextField placeholder="Type Full Name Here" />
                  </div>
                </div>
              </div>
              <CustomButton
                width="111px"
                variant="#BDBDBD"
                label="Save"
                onClick={() => setShowPayrollPolicyForm(false)}
                iconPosition="right"
                iconUrl="/ess/images/copy-success.svg"
              />
            </>
          )}
          {showCompensationPolicyForm && (
            <>
              <p className="type-title3 title">Compensation Policy</p>
              <div className="form-div">
                <p className="type-body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ut malesuada massa. Sed sodales arcu in eleifend
                  aliquam. Nam id ex viverra, mattis turpis sed, ullamcorper
                  metus. Integer fermentum, sapien sed fringilla condimentum,
                  diam dui ultricies risus. sit amet, consectetur adipiscing
                  elit. Quisque ut malesuada massa. Sed sodales arcu in eleifend
                  aliquam. Nam id ex viverra, mattis turpis sed, ullamcorper
                  metus. Integer fermentum, sapien sed fringilla condimentum,
                  diam dui ultricies risus.
                </p>
              </div>
              <div className="flexed-div">
                <div>
                  <CheckBox label="I agree to compensation policy" />
                </div>
                <div className="sign-div">
                  <p className="type-title3">Type Full Name as signature </p>
                  

                  <div className="fn-div">
                    <TextField placeholder="Type Full Name Here" />
                  </div>
                </div>
              </div>
              <CustomButton
                width="111px"
                variant="#BDBDBD"
                label="Save"
                onClick={() => setShowCompensationPolicyForm(false)}
                iconPosition="right"
                iconUrl="/ess/images/copy-success.svg"
              />
            </>
          )}
          {showTandAPolicyForm && (
            <>
              <p className="type-title3 title">Time and Attendance Policy</p>
              <div className="form-div">
                <p className="type-body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ut malesuada massa. Sed sodales arcu in eleifend
                  aliquam. Nam id ex viverra, mattis turpis sed, ullamcorper
                  metus. Integer fermentum, sapien sed fringilla condimentum,
                  diam dui ultricies risus. sit amet, consectetur adipiscing
                  elit. Quisque ut malesuada massa. Sed sodales arcu in eleifend
                  aliquam. Nam id ex viverra, mattis turpis sed, ullamcorper
                  metus. Integer fermentum, sapien sed fringilla condimentum,
                  diam dui ultricies risus.
                </p>
              </div>
              <div className="flexed-div">
                <div>
                  <CheckBox label="I agree to time and attendance policy" />
                </div>
                <div className="sign-div">
                  <p className="type-title3">Type Full Name as signature </p>
                  

                  <div className="fn-div">
                    <TextField placeholder="Type Full Name Here" />
                  </div>
                </div>
              </div>
              <CustomButton
                width="111px"
                variant="#BDBDBD"
                label="Save"
                onClick={() => setShowTandAPolicyForm(false)}
                iconPosition="right"
                iconUrl="/ess/images/copy-success.svg"
              />
            </>
          )}
          {!showPayrollPolicyForm &&
            !showCompensationPolicyForm &&
            !showTandAPolicyForm && (
              <>
              <HeaderText>
                <p className="type-title3 title">Policies</p>
                <p className="type-body2 sub-title">Assigned Policies</p>
              </HeaderText>
                <div className="form-wrapper">
                  <div>
                    <CheckBox label="Payroll Policy" />
                  </div>
                  <div>
                    {/* TODO WHEN INTIGRATING WITH API WE WILL CHECK IF POLICY IS SIGNED OR NOT BEFORE SHOWING THE RIGHT BUTTON TEXT LABEL*/}
                    <CustomButton
                      width="111px"
                      variant="#fff"
                      textColor="#000"
                      label="Sign"
                      onClick={() => {
                        setShowPayrollPolicyForm(true);
                      }}
                      secondaryBtn
                    />
                  </div>
                </div>
                <div className="form-wrapper">
                  <div>
                    <CheckBox label="Compensation Policy" />
                  </div>
                  <div>
                    <CustomButton
                      width="111px"
                      variant="#fff"
                      textColor="#000"
                      label="Sign"
                      onClick={() => {
                        setShowCompensationPolicyForm(true);
                      }}
                      secondaryBtn
                    />
                  </div>
                </div>
                <div className="form-wrapper">
                  <div>
                    <CheckBox label="Time And Attendance" />
                  </div>
                  <div>
                    <CustomButton
                      width="111px"
                      variant="#fff"
                      textColor="#000"
                      label="Sign"
                      onClick={() => {
                        setShowTandAPolicyForm(true);
                      }}
                      secondaryBtn
                    />
                  </div>
                </div>

                <ButtonGroups>
                  <Button
                    bg="var(--grey-4)"
                    textcolor="var(--grey-25)"
                    rightIcon={<CopySuccess stroke="var(--grey-25)"/>}
                    iconcolor="var(--grey-25)"
                    onClick={() => saveData()}
                    className="save-btn"
                  >
                    Save
                  </Button>
                  <div className="prev-cont-btn">
                    <Button
                      border="var(--lilac-400)"
                      bg="var(--white)"
                      textcolor="var(--lilac-400)"
                      onClick={() => goBack()}
                    >
                      Previous
                    </Button>
                    <Button
                      bg="var(--lilac-400)"
                      textcolor="var(--grey-25)"
                      onClick={() => continueAction()}
                    >
                      Continue
                    </Button>
                  </div>
                </ButtonGroups>
              </>
            )}
        </Inner>
      </div>
    </Container>
  );
}

export default Policies;
