import { styled } from "goober";
import { mobile, mobileMedium } from "../../globalStyle";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  .title {
    color: var(--grey-500);
    margin-bottom: 2rem;
  }
  .type-body2 {
    color: var(--grey-300);
  }
  .inner-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 0.5px solid #e0e0e0;
    border-radius: 4px;
    .flexed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .main-text-div {
      display: flex;
      max-width: 100%;
      margin-top: 40px;
      .text-div {
        padding-right: 30px;
        width: 230px;
      }
    }
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
`;