import { styled } from "goober";

export const AccordionItem = styled("div")`
  .title-box {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--grey-100);
    background: var(--white);
    color: var(--grey-300);
    cursor: pointer;
    &.active {
        color: var(--grey-500);
        border-bottom: 4px solid var(--red-400);
        margin-bottom: 0.75px;
    }
  }
`;