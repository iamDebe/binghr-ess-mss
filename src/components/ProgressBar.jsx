import React from "react";
import { styled } from "goober";

const Container = styled("div")`
  width: 100%;
  height: 0.25rem;
  background: #eeeeee;
  border-radius: var(--br-xl);
  .progress-bar {
    height: 100%;
    background: var(--grey-400);
    border-radius: var(--br-xl);
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
