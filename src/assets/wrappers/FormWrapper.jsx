import { styled } from "goober";
export const FormWrapper = styled("form")`
  margin: 0 auto;
  border: 1px solid var(--grey-100);
  border-top: 7px solid var(--red-400);
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.875rem;
  width: 100%;
  max-width: 489px;
  position: relative;
  .error {
    color: var(--red-400);
  }
  .back {
    color: var(--red-400);
    font-size: 12px;
    line-height: 15px;
    margin-top: 1.1875rem;
    text-align: center;
  }
  .submit-button {
    width: 100%;
    margin-top: 3.25rem;
  }
  .textfield-width {
    flex-basis: calc(50% - 9px);
  }
`;
