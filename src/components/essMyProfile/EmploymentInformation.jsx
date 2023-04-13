import React from "react";
import { TextField } from "@/components/forms";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import { ReactComponent as CalenderIcon } from "@/assets/images/calendar.svg";
import Button from "@/components/button";
import { Container } from "@/components/essMyProfile/CommonStyles";

const EmploymentInformation = ({ fieldsEdited }) => {
  return (
    <Container>
      <p className="type-title2">Employment Information </p>
      <div className="inner-container">
        <div className="info-group">
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
              marginbottom="0"
              icon={<CalenderIcon className="input-icon icon" />}
            />
            <TextField
              id="rehiredate"
              label="Rehire Date"
              type="date"
              placeholder="Enter Rehire Date"
              className="field-flex-basis"
              marginbottom="0"
              icon={<CalenderIcon className="input-icon icon" />}
            />
            <TextField
              id="originalstartdate"
              label="Original Start Date"
              type="date"
              placeholder="Enter Original Start Date"
              className="field-flex-basis"
              marginbottom="0"
              icon={<CalenderIcon className="input-icon icon" />}
            />
            <TextField
              id="servicedate"
              label="Service Date"
              type="date"
              placeholder="Enter Termination Date"
              className="field-flex-basis"
              marginbottom="0"
              icon={<CalenderIcon className="input-icon icon" />}
            />
            <TextField
              id="terminationdate"
              label="Termination Date"
              type="date"
              placeholder="Enter Termination Datee"
              className="field-flex-basis"
              marginbottom="0"
              icon={<CalenderIcon className="input-icon icon" />}
            />
            <TextField
              id="lengthofservice"
              label="Length Of Service"
              type="date"
              placeholder="Enter Length Of Service"
              className="field-flex-basis"
              marginbottom="0"
              icon={<CalenderIcon className="input-icon icon" />}
            />
          </div>
        </div>
        <Button
          bg={fieldsEdited ? "var(--lilac-400)" : "var(--grey-4)"}
          textcolor="var(--grey-25)"
          rightIcon={<CopySuccess fill="var(--lilac-400)" />}
          iconcolor="var(--grey-25)"
          width="8.125rem"
        >
          Update Info
        </Button>
      </div>
    </Container>
  );
};

export default EmploymentInformation;
