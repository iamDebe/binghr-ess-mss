import React from "react";
import { styled } from "goober";
import { CheckBox } from "../forms";
import CustomButton from "../CustomButton";

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

export default TodoList;
