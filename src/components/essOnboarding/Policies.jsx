import React, { useState } from "react";
import { styled } from "goober";
import CustomButton from "@/components/CustomButton";
import { CheckBox, TextField } from "@/components/forms";
import Spacer from "@/components/Spacer";

const Container = styled("div")`
  width: 100%;
  .div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 0.5px solid #e0e0e0;
    border-radius: 4px;
  }
  .top-border {
    width: 100%;
    border-top: 7px solid #d2446e;
    top: 0;
    border-radius: 4px 0.5px 4px 0.5px;
  }
`;

const Inner = styled("div")`
  width: 1030px;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  @media only screen and (min-width: 375px) and (max-width: 969px) {
    width: 100%;
  }
  .type-title3 {
    color: var(--grey-400);
  }
  .type-body2 {
    color: var(--grey-300);
  }
  .button-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    div {
      display: flex;
      @media only screen and (min-width: 375px) and (max-width: 969px) {
        flex-wrap: wrap;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
  .main-text-div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  .form-div {
    padding: 10px;
    border: 0.5px solid #e0e0e0;
  }
  .flexed-div {
    width: full;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .sign-div {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 50%;
      @media only screen and (min-width: 375px) and (max-width: 969px) {
        width: 100%;
        flex-wrap: wrap;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .fn-div {
        width: 200px;
        padding-top: 18px;
      }
    }
  }
`;

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
          !showTandAPolicyForm && <div className="top-border" />}

        <Inner>
          {showPayrollPolicyForm && (
            <>
              <p className="type-title3">Payroll Policy</p>
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
                  <Spacer width={10} />

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
              <p className="type-title3">Compensation Policy</p>
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
                  <Spacer width={10} />

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
              <p className="type-title3">Time and Attendance Policy</p>
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
                  <Spacer width={10} />

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
                <p className="type-title3">Policies</p>
                <p className="type-body2">Assigned Policies</p>

                <div className="main-text-div">
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
                <div className="main-text-div">
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
                <div className="main-text-div">
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

                <div className="button-groups">
                  <CustomButton
                    width="111px"
                    variant="#BDBDBD"
                    label="Save"
                    onClick={() => saveData()}
                    iconPosition="right"
                    iconUrl="/ess/images/copy-success.svg"
                  />
                  <div>
                    <CustomButton
                      width="111px"
                      variant="white"
                      textColor="#6C3787"
                      label="Previous"
                      onClick={() => goBack()}
                      secondaryBtn
                    />
                    <Spacer width={20} />
                    <CustomButton
                      width="111px"
                      variant="#6c3787"
                      label="Continue"
                      onClick={() => continueAction()}
                    />
                  </div>
                </div>
              </>
            )}
        </Inner>
      </div>
    </Container>
  );
}

export default Policies;
