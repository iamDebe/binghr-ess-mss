import React from "react";
import ModalPortal from "./ModalPortal";

const AuthWelcomeModal = ({ clickAction, closeModal, isVisible = false }) => {
  return isVisible ? (
    <ModalPortal>
      <div
        style={{
          backgroundColor: "rgba(38, 38, 38, 0.75)",
          zIndex: 100,
          display: "flex",
          position: "fixed",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          opacity: 20,
          backdropFilter: "5px",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "489px",
            height: "371px",
            padding: "0 5px 0 5px",
            textAlign: "center",
            borderTop: "5px solid #27AE60",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingTop: "40px",
              textAlign: "center",
            }}
          >
            <img src="/images/barterlogosvg.svg" />
          </div>
          <p
            style={{
              paddingTop: "10px",
              fontSize: "18px",
              color: "#4F4F4F",
              fontWeight: 500,
            }}
          >
            You have Signed up Successfully
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingTop: "40px",
              paddingBottom: "40px",
              textAlign: "center",
            }}
          >
            <img src="/images/success-1.svg" />
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              bottom: 0,
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <button
              style={{
                width: "100%",
                height: "38px",
                paddingBottom: "10px",
                color: "#fff",
                backgroundColor: "#27AE60",
                border: "none",
                outline: "none",
                borderRadius: "4px",
                textAlign: "center",
                padding: " 0.625rem 0.5rem",
                fontSize: "14px",
              }}
              onClick={() => clickAction()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  ) : null;
};

export default AuthWelcomeModal;
