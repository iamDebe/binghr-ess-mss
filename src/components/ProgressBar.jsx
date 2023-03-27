import React from "react";
import { styled } from "goober";

const Container = styled("div")`
  width: 100%;
  height: 18px;
  background: #eeeeee;
  border-radius: 8px;
  .progress-bar {
    height: 100%;
    background: #667085;
    border-radius: 8px;
  }
`;

const ProgressBar = ({ progressPercentage = 20 }) => {
  return (
    <Container>
      <div
        style={{ width: `${progressPercentage}%` }}
        className="progress-bar"
      />
    </Container>
  );
};

export default ProgressBar;
