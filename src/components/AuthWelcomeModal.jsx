import React from "react";
import { styled } from "goober";
import ModalPortal from "./ModalPortal";

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
  }
  .logo-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 40px;
    text-align: center;
  }
  .welcome-text {
    padding-top: 10px;
    font-size: 18px;
    color: #4f4f4f;
    font-weight: 500;
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
      height: 38px;
      padding-bottom: 10px;
      color: #fff;
      background-color: #27ae60;
      border: none;
      outline: none;
      border-radius: 4px;
      text-align: center;
      padding: 0.625rem 0.5rem;
      font-size: 14px;
    }
  }
`;

const AuthWelcomeModal = ({ clickAction, closeModal, isVisible = false }) => {
  return isVisible ? (
    <ModalPortal>
      <Container>
        <div className="inner-div">
          <div className="logo-div">
            <img src="/images/barter.svg" />
          </div>
          <p className="welcome-text">You have Signed up Successfully</p>
          <div className="success-logo-div">
            <img src="/images/success-1.svg" />
          </div>
          <div className="button-div">
            <button className="button" onClick={() => clickAction()}>
              Continue
            </button>
          </div>
        </div>
      </Container>
    </ModalPortal>
  ) : null;
};

export default AuthWelcomeModal;
