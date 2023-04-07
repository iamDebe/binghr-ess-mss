import React from "react";
import { styled } from "goober";
// import DatePicker from "react-datepicker";
import CustomButton from "../CustomButton";
import { TextField } from "../forms";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import Button from "@/components/button";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  .title {
    color: var(--grey-500);
  }
  .type-body2 {
    color: var(--grey-300);
  }
  .inner-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 0.5px solid #e0e0e0;
    border-radius: 4px;
    .flexed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .main-text-div {
      display: flex;
      max-width: 100%;
      margin-top: 40px;
      .text-div {
        padding-right: 30px;
        width: 230px;
      }
    }
  }
`;

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
          <div className="main-text-div">
            <div className="text-div">
              <TextField
                id="hiredate"
                label="Hire Date"
                type="date"
                placeholder="Enter Hire Date"
              />
            </div>
            <div className="text-div">
              <TextField
                id="rehiredate"
                label="Rehire Date"
                type="date"
                placeholder="Enter Rehire Date"
              />
            </div>
            <div className="text-div">
              <TextField
                id="originalstartdate"
                label="Original Start Date"
                type="date"
                placeholder="Enter Original Start Datee"
              />
            </div>
            <div className="text-div">
              <TextField
                id="servicedate"
                label="Service Date"
                type="date"
                placeholder="Enter Termination Date"
              />
            </div>
          </div>

          <div className="main-text-div">
            <div className="text-div">
              <TextField
                id="terminationdate"
                label="Termination Date"
                type="date"
                placeholder="Enter Termination Datee"
              />
            </div>
            <div className="text-div">
              <TextField
                id="lengthofservice"
                label="Length Of Service"
                type="date"
                placeholder="Enter Length Of Service"
              />
            </div>
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
