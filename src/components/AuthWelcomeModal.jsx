import React from "react";
import { styled } from "goober";
import ModalPortal from "@/components/ModalPortal";
import Button from "@/components/button";

export const Container = styled("div")`
  background-color: rgba(38, 38, 38, 0.75);
  z-index: 100;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  opacity: 20;
  backdrop-filter: 5px;
  height: 100vh;
  width: 100vw;
  .inner-div {
    background-color: white;
    width: 489px;
    height: 371px;
    padding: 0 5px 0 5px;
    text-align: center;
    border-top: 5px solid #27ae60;
    border-radius: 8px;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      width: 90%;
    }
  }
  .logo-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 10px;
    text-align: center;
  }
  .success-logo-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
  }
  .button-div {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: end;
    bottom: 0;
    padding-left: 15px;
    padding-right: 15px;
    .button {
      width: 100%;
    }
  }
`;

const AuthWelcomeModal = ({ clickAction, closeModal, isVisible = false }) => {
  return isVisible ? (
    <ModalPortal>
      <Container>
        <div className="inner-div">
          <div className="logo-div">
            {/* USE COMPANY LOGO FROM URL */}
            <img src="/images/barter.svg" />
          </div>
          <p className="type-title2">You have Signed up Successfully</p>
          <div className="success-logo-div">
            <img src="/images/success-1.svg" />
          </div>
          <div className="button-div">
            <Button
              bg="#27ae60"
              textcolor="var(--grey-25)"
              className="button"
              onClick={() => clickAction()}
            >
              Continue
            </Button>
          </div>
        </div>
      </Container>
    </ModalPortal>
  ) : null;
};

export default AuthWelcomeModal;
