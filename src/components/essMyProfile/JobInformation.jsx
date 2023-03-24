import React from "react";
import { styled } from "goober";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
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
`;

const JobInformation = ({ continueAction, goBack, saveData }) => {
  return (
    <Container>
      <Inner>
        <p className="type-title3">Job Information </p>
      </Inner>
    </Container>
  );
};

export default JobInformation;
