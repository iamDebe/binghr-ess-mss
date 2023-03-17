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
    width: 52%;
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
    max-width: 100%;
    display: flex;
    justify-content: start;
    box-sizing: border-box;
  }
  .text-div {
    padding-right: 30px;
    width: 230px;
  }
`;

function AddressTwo({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Address Information 2</p>
        <p className="type-body2">Mailing Address</p>
        <CheckBox label="Same as home address" />
        <div className="main-text-div">
          <div className="text-div">
            <TextField
              id="street"
              label="Street"
              type="text"
              placeholder="Enter Street Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="apartment"
              label="Apartment"
              type="text"
              placeholder="Enter Apartment Number"
            />
          </div>
          <div className="text-div">
            <TextField
              id="city"
              label="City"
              type="text"
              placeholder="Enter City Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="state"
              label="State"
              type="text"
              placeholder="Enter State Name"
            />
          </div>
        </div>
        <div className="main-text-div">
          <div className="text-div">
            <TextField
              id="country"
              label="Country"
              type="text"
              placeholder="Enter Country Name"
            />
          </div>
          <div className="text-div">
            <TextField
              id="postalCode"
              label="Postal Code"
              type="text"
              placeholder="Enter Postal Code"
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

export default AddressTwo;
