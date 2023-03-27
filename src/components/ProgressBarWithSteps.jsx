import React from "react";
import { styled } from "goober";

const Container = styled("div")`
  position: relative;
  @media only screen and (min-width: 375px) and (max-width: 969px) {
    width: 100%;
  }
  .progress-bar {
    background: #bbbec4;
    height: 1px;
    width: 60px;
    margin-top: 10px;
    left: 10%;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      width: 20px;
    }
  }
  .progress-num {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 95%;
  }

  .progress-num li {
    margin: 0px;
    position: relative;
    z-index: 1;
  }
`;

const ProgressBarWithSteps = () => {
  return (
    <Container>
      <ul className="progress-num">
        <li>
          <img src="/images/checkmark.svg" />
        </li>
        <div className="progress-bar"></div>

        <li>
          <img src="/images/checkmark.svg" />
        </li>
        <div className="progress-bar"></div>

        <li>
          <img src="/images/checkmark.svg" />
        </li>
        <div className="progress-bar"></div>

        <li>
          <img src="/images/checkmark.svg" />
        </li>
        <div className="progress-bar"></div>

        <li>
          <img src="/images/checkmark.svg" />
        </li>
        <div className="progress-bar"></div>

        <li>
          <img src="/images/checkmark.svg" />
        </li>
      </ul>
    </Container>
  );
};

export default ProgressBarWithSteps;
