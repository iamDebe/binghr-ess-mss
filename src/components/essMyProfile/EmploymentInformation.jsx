import React from "react";
import { styled } from "goober";
// import DatePicker from "react-datepicker";
import CustomButton from "../CustomButton";
import { TextField } from "../forms";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";
import { Container, Inner } from "./CommonStyles";

const EmploymentInformation = ({ continueAction, goBack, saveData }) => {
  return (
    <Container>
      <Inner>
        <p className="type-title2">Employment Information </p>
        <div className="inner-container">
          <div className="flexed-header">
            <p className="type-title3 title">Employment Data </p>
            <div>
              <Button
                bg="var(--grey-25)"
                border="var(--lilac-400)"
                textcolor="var(--lilac-400)"
                rightIcon={<PenIcon fill="var(--lilac-400)" />}
                iconcolor="var(--grey-25)"
                width="93px"
              >
                Edit
              </Button>
            </div>
          </div>
          <div className="form-wrapper">
            <TextField
              id="hiredate"
              label="Hire Date"
              type="date"
              placeholder="Enter Hire Date"
              className="field-flex-basis"
              marginbottom="1.5rem"
            />
            <TextField
                id="rehiredate"
                label="Rehire Date"
                type="date"
                placeholder="Enter Rehire Date"
                className="field-flex-basis"
                marginbottom="1.5rem"
              />
              <TextField
                id="originalstartdate"
                label="Original Start Date"
                type="date"
                placeholder="Enter Original Start Date"
                className="field-flex-basis"
                marginbottom="1.5rem"
              />
              <TextField
                id="servicedate"
                label="Service Date"
                type="date"
                placeholder="Enter Termination Date"
                className="field-flex-basis"
                marginbottom="1.5rem"
              />
              <TextField
                id="terminationdate"
                label="Termination Date"
                type="date"
                placeholder="Enter Termination Datee"
                className="field-flex-basis"
                marginbottom="1.5rem"
              />
              <TextField
                id="lengthofservice"
                label="Length Of Service"
                type="date"
                placeholder="Enter Length Of Service"
                className="field-flex-basis"
                marginbottom="1.5rem"
              />
          </div>
          <div className="button-groups">
            <Button
              bg="var(--lilac-400)"
              textcolor="var(--grey-25)"
              rightIcon={<CopySuccess fill="var(--lilac-400)" />}
              iconcolor="var(--grey-25)"
              width="111px"
            >
              Save
            </Button>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

export default EmploymentInformation;
