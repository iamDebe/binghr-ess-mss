import { styled } from 'goober';
import { mobileSmall, mobile, tablet, desktopMidi } from"@/globalStyle"


export const TextFieldWrapper = styled("div")`
  width: 30%;
`;
export const ChartWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2rem;
  border: 1px solid var(--grey-200);
  border-radius: .5rem;
  width: 45%;
  height: fit-content;

  ${desktopMidi} {
    flex-wrap: nowrap;
    width: 50%;
  }

  ${tablet} {
      flex-wrap: nowrap;
      justify-content: space-evenly;
      width: 80%;
    }
  ${mobile} {
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
  }
`;
export const SecondaryChartsWrapper = styled("div")`
  align-self: center;
  width: 50%;
`;
export const PayrollTableWrapper = styled("div")`
  padding: .3rem;
  border: 1px solid var(--grey-200);
  border-radius: .5rem;
  width: 55%;

  ${desktopMidi} {
    flex-wrap: nowrap;
    margin: 0rem;
  }
  ${tablet} {
    flex-wrap: nowrap;
    width: 100%;
    margin: 0rem;
  }
`;
export const ChartAndPayrollWrapper = styled("div")`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  ${tablet} {
    flex-wrap: wrap;
  }
`;
export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: start;
  align-items: flex-end;
  gap: 0.75rem;
  flex-wrap: wrap;
  .payroll-search {
    display: flex;
    align-items: flex-end;
    flex: 1;
    gap: 1.875rem;
    .field-flex-basis {
      flex-basis: calc(30% - 30px);
      ${mobile} {
        flex-basis: calc(50% - 10px);
      }
      ${mobileSmall} {
        flex-basis: 80%;
      }
    }
    .btn-flex-basis {
      flex-basis: calc(25% - 15px);
      width: 11.5rem;
      ${mobileSmall} {
        flex-basis: 20%;
      }
    }
    ${mobileSmall} {
      gap: 0.75rem;
    }
  }
  @media screen and (max-width: 352px){
    flex-wrap: wrap;
  }  
`;