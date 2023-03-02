import { styled } from "goober";
export const OnboardingWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.3125rem 4.875rem 2.625rem 4.875rem;
  height: 100%;
  gap: 2rem;
  .footer span {
    color: var(--neutral-25);
    font-weight: 500;
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;
