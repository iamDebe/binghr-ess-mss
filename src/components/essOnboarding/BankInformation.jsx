import React from "react";
import { styled } from "goober";
import CustomButton from "../CustomButton";
import { TextField } from "../forms";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid #e0e0e0;
  border-left: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  border-radius: 4px;
  .top-border {
    width: 78%;
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
  }
  .main-text-div {
    display: flex;
    max-width: 100%;
  }
  .text-div {
    padding-right: 30px;
    width: 230px;
  }
`;

function BankInformation({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Bank Account Information</p>
        <p className="type-body2">Bank Details</p>
        <div className="main-text-div">
          <div className="text-div">
            <TextField
              id="bankname"
              label="Bank Name"
              type="text"
              placeholder="Enter Bank Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="accountname"
              label="Account Name"
              type="text"
              placeholder="Enter Account Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="accountnumber"
              label="Account Number"
              type="text"
              placeholder="Enter Account Number"
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

export default BankInformation;
