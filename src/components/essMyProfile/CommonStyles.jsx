import { styled } from "goober";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2.625rem;
  gap: 1.875rem;
  .title {
    color: var(--grey-500);
  }
  .type-body2 {
    color: var(--grey-300);
  }
  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 419px;
    background: var(--white);
    padding: 1.5rem 1.75rem 2rem 1.75rem;
    border: 0.5px solid var(--grey-5);
    border-radius: var(--br);
    width: 100%;
    .flexed-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.625rem;
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
  .action-field {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    color: var(--success);
    .action-icon {
      background: #F7F7F7;
      border-radius: var(--br);
      height: 1.5rem;
      width: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  gap: 1.25rem;
`;

export const TabFormsWrapper = styled("div")`
  border: 1px solid var(--grey-200);
  padding: 1.25rem 1.375rem;
  display: flex;
  flex-direction: column;
  gap: 2.125rem;
  color: var(--grey-500);
  .form-rows {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--grey-400);
    }
  }
`;