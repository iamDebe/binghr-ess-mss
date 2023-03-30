import React from "react";
import { styled } from "goober";
import { CheckBox } from "@/components/forms";
import CustomButton from "@/components/CustomButton";
import Spacer from "@/components/Spacer";
import ContainerTopBorder from "@/components/ContainerTopBorder";
import { mobile, mobileLarge } from "@/globalStyle";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid var(--grey-5);
  border-radius: 4px;
`;

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  p.type-title3 {
    color: var(--black);
  }
  .tasks {
    display: flex;
    align-items: baseline;
    gap: 5.25rem;
    .col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    }
    ${mobile} {
      gap: 2.5rem;
    }
    ${mobileLarge} {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
  .button-groups {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.125rem;
    flex-wrap: wrap;
    .prev-cont-btn {
      display: flex;
      flex-wrap: wrap;
      gap: 1.125rem;
    }
  }
`;

function TodoList({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <ContainerTopBorder />
      <Inner>
        <p className="type-title3">To Do List</p>
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
        <div className="button-groups">
          <CustomButton
            width="111px"
            variant="#BDBDBD"
            label="Save"
            onClick={() => saveData()}
            iconPosition="right"
            iconUrl="/images/copy-success.svg"
          />
          <div className="prev-cont-btn">
            <CustomButton
              width="111px"
              variant="white"
              textColor="#6C3787"
              label="Previous"
              onClick={() => goBack()}
              secondaryBtn
            />
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
