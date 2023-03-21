import React from "react";
import { styled } from "goober";
import { CheckBox } from "../forms";
import CustomButton from "../CustomButton";
import Spacer from "../Spacer";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
  .top-border {
    width: 26%;
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
  .flexed-checks {
    display: flex;
    align-items: center;
    gap: 2rem;
    .flexed-checks-inner {
      margin-right: 100px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
  .button-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
    }
  }
`;

function TodoList({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">To Do List</p>
        <div className="flexed-checks">
          <div className="flexed-checks-inner">
            <CheckBox label="Document Confirmation" />
            <CheckBox label="Meet with head of HR" />
          </div>
          <div className="flexed-checks-inner">
            <CheckBox label="Password Setup" />
            <CheckBox label="Setup Payroll" />
          </div>
        </div>
        <CheckBox label="Team Introduction" />
        <CheckBox label="Workspace Assignment" />
        <CheckBox label="Team Orientation" />

        <div className="button-groups">
          <CustomButton
            width="111px"
            variant="#BDBDBD"
            label="Save"
            onClick={() => saveData()}
            iconPosition="right"
            iconUrl="/images/copy-success.svg"
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
      </Inner>
    </Container>
  );
}

export default TodoList;
