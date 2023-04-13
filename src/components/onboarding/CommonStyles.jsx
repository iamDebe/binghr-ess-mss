import { styled } from "goober";
import { mobile, mobileSmall, mobileMedium } from "@/globalStyle";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  border: 0.5px solid var(--grey-5);
  border-radius: 4px;
  position: relative;
  width: 100%;
  min-height: 420px;
`;

export const Inner = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 419px;
  padding: 1.625rem;
  gap: 2rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--border-width);
    border-top: 7px solid var(--red-400);
    border-radius: var(--br-lg) var(--br-sm) var(--br-lg) var(--br-sm);
 }
 .main-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
 }
  .title, .sub-title {
    color: var(--grey-500);
  }
  .welcome-text {
    color: var(--grey-400);
  }
  .tasks {
    display: flex;
    align-items: baseline;
    gap: 5.25rem;
    .col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    ${mobile} {
      gap: 2.5rem;
    }
    ${mobileMedium} {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
  .intro-video-wrapper {
    width: 100%;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .form-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.75rem 1.25rem;
    width: 100%;
  }
  .field-flex-basis {
    flex-basis: calc(25% - 15px);
    ${mobile} {
      flex-basis: calc(50% - 10px);
    }
    ${mobileMedium} {
      flex-basis: 100%;
    }
  }

  .form-div {
    padding: 10px;
    border: 0.5px solid #e0e0e0;
  }
  .flexed-div {
    width: full;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 375px) and (max-width: 969px) {
      flex-wrap: wrap;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .sign-div {
      display: flex;
      align-items: center;
      justify-content: end;
      width: 50%;
      @media only screen and (min-width: 375px) and (max-width: 969px) {
        width: 100%;
        flex-wrap: wrap;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .fn-div {
        width: 200px;
        padding-top: 18px;
      }
    }
  }
`;

export const HeaderText = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonGroups = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.125rem;
  flex-wrap: wrap;
  .save-btn {
    flex: 1;
  }
  .prev-cont-btn {
    display: flex;
    gap: 1.125rem;
    flex: 1;
    justify-content: flex-end;
    ${mobileSmall} {
      justify-content: flex-start;
    }
  }
`;
