import React from "react";
import { CheckBox } from "@/components/forms";
import { ButtonGroups } from "@/components/onboarding/CommonStyles";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { HeaderText } from "@/components/onboarding/CommonStyles";
import OnboardingTemplate from "@/components/onboarding/OnboardingTemplate";

function TodoList({ continueAction, goBack, saveData }) {
  return (
    <OnboardingTemplate>
      <div className="main-content">
        <HeaderText>
          <p className="type-title3 title">To Do List</p>
        </HeaderText>
        <div className="tasks">
          <div className="col">
            <CheckBox label="Document Confirmation" />
            <CheckBox label="Meet with head of HR" />
            <CheckBox label="Team Introduction" />
            <CheckBox label="Workspace Assignment" />
            <CheckBox label="Team Orientation" />
          </div>
          <div className="col">
            <CheckBox label="Password Setup" />
            <CheckBox label="Setup Payroll" />
          </div>
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
    </OnboardingTemplate>
  );
}

export default TodoList;
