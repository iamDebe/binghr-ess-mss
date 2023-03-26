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
    width: 52%;
    border-top: 7px solid #d2446e;
    top: 0;
    border-radius: 4px 0.5px 4px 0.5px;
  }
`;

const Inner = styled("div")`
  width: 1030px;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  @media only screen and (min-width: 375px) and (max-width: 969px) {
    width: 100%;
  }
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
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    div {
      display: flex;
      @media only screen and (min-width: 375px) and (max-width: 969px) {
        flex-wrap: wrap;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
  .main-text-div {
    display: flex;
    max-width: 100%;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  .text-div {
    padding-right: 30px;
    width: 230px;
  }
`;

function AddressOne({ continueAction, goBack, saveData }) {
  return (
    <Container>
      <div className="top-border" />
      <Inner>
        <p className="type-title3">Address Information 1</p>
        <p className="type-body2">Home Address</p>
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

export default AddressOne;
