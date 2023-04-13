import React from "react";
import { TextField } from "@/components/forms";
import { ReactComponent as PenIcon } from "@/assets/images/pen-icon.svg";
import { ReactComponent as CopySuccess } from "@/assets/images/copy-success.svg";
import { ReactComponent as EyeIcon } from "@/assets/images/eye.svg";
import Button from "@/components/button";
import { Container } from "@/components/essMyProfile/CommonStyles";

const Security = ({ fieldsEdited }) => {
  return (
    <Container>
      <p className="type-title2">Security </p>
      <div className="inner-container">
        <div className="info-group">
          <div className="flexed-header">
            <p className="type-title3 title">Security Data </p>
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
              id="oldpassword"
              label="Old Password"
              type="password"
              placeholder="Enter Password"
              className="field-flex-basis"
              marginbottom="0"
              icon={<EyeIcon className="input-icon icon" stroke="var(--grey-300)" />}
            />
            <TextField
              id="newpassword"
              label="New Password"
              type="password"
              placeholder="Enter Password"
              className="field-flex-basis"
              marginbottom="0"
              icon={<EyeIcon className="input-icon icon" stroke="var(--grey-300)" />}
            />
            <TextField
              id="confirmpassword"
              label="Confirm Password"
              type="password"
              placeholder="Enter Password"
              className="field-flex-basis"
              marginbottom="0"
              icon={<EyeIcon className="input-icon icon" stroke="var(--grey-300)" />}
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

export default Security;
