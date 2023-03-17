import React from "react";
import { styled } from "goober";
import CustomButton from "../CustomButton";
import { CheckBox, TextField } from "../forms";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
  .top-border {
    width: 100%;
    border-top: 7px solid #d2446e;
    top: 0;
    border-radius: 4px 0.5px 4px 0.5px;
  }
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
  .button-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
  }
  .main-text-div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

function Policies({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Policies</p>
        <p className="type-body2">Assigned Policies</p>

        <div className="main-text-div">
          <div>
            <CheckBox label="Payroll Policy" />
          </div>
          <div>
            {/* TODO WHEN INTIGRATING WITH API WE WILL CHECK IF POLICY IS SIGNED OR NOT BEFORE SHOWING THE RIGHT BUTTON*/}
            <CustomButton
              width="111px"
              variant="#6c3787"
              label="Sign"
              onClick={() => {}}
            />
             {/* <CustomButton
              width="111px"
              variant="#6c3787"
              label="Policy Signed"
              onClick={() => {}}
            /> */}
          </div>
        </div>
        <div className="main-text-div">
          <div>
            <CheckBox label="Compensation Policy" />
          </div>
          <div>
            <CustomButton
              width="111px"
              variant="#6c3787"
              label="Sign"
              onClick={() => {}}
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
              variant="#6c3787"
              label="Sign"
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="button-groups">
          <CustomButton
            width="111px"
            variant="#eee"
            label="Save"
            onClick={() => saveData()}
          />
          <div style={{ display: "flex" }}>
            <CustomButton
              width="111px"
              variant="white"
              textColor="black"
              label="Previous"
              onClick={() => goBack()}
            />
            <div style={{ width: "20px" }} />
            <CustomButton
              width="111px"
              variant="#6c3787"
              label="Continue"
              onClick={() => continueAction()}
            />
          </div>
        </div>
      </Inner>
    </Container>
  );
}

export default Policies;
