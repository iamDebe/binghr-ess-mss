
import React, {useEffect} from "react";
import { styled } from "goober";

export const Wrapper = styled("div")`
  input {
    background: var(--grey-50);
    color: var(--grey-400);
    font-family: inherit;
    font-size: 12px;
    padding:  0.5rem 2.4rem 0.5rem 1rem;
    border: 0.5px solid var(--grey-200);
    border-radius: 4px;
    outline: none;
    &::placeholder {
      font-family: inherit;
      color: var(--grey-300);
      padding-left: 1rem;
    }
    
  }
`;


const SearchField = ({ icon, optional, disabled, ref, ...props }) => {
 
  return (
    <>
   
      <Wrapper>
        <span> {icon && <img src={icon} className="input-icon icon" />} </span>
        <input className="search" {...props} ref={ref} disabled={disabled}/>
      </Wrapper>
     
    
    </>
  );
}


export default SearchField;