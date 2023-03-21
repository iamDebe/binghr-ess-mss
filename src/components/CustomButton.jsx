import React from "react";
import { styled } from "goober";
import Spacer from "./Spacer";

const Container = styled("div")`
  .button-div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    bottom: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const CustomButton = ({
  variant = "blue",
  label,
  onClick = () => {},
  type = "button",
  width = "100%",
  height = "38px",
  disabled = false,
  textColor = "white",
  iconUrl,
  iconPosition = "right",
  iconLabelSpacing = 5,
  secondaryBtn = false,
}) => {
  return (
    <Container>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={{
          background: variant,
          color: textColor,
          width: width,
          height: height,
          border: secondaryBtn ? "1px solid #6C3787" : "none",
          outline: "none",
          borderRadius: "4px",
          textAlign: "center",
          padding: "0.625rem 0.5rem",
          fontSize: "14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: iconLabelSpacing,
        }}
      >
        {iconUrl && iconPosition === "left" && (
          <>
            <Spacer width={iconLabelSpacing} />
            {iconUrl}
          </>
        )}
        {label}
        {iconUrl && iconPosition === "right" && (
          <>
            <Spacer width={iconLabelSpacing} />
            <img src={iconUrl} />
          </>
        )}
      </button>
    </Container>
  );
};

export default CustomButton;
