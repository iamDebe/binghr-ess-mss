import React from 'react'
import { styled } from 'goober';
import {mobile, tablet, desktopMidi,  mobileSmall} from"@/globalStyle"

const TopBarWithSearchWrapper = () => {
  return (
    <div>TopBarWithSearchWrapper</div>
  )
}

export default TopBarWithSearchWrapper;
export const TopBarWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid var(--grey-200);
  padding: 0.5rem 1.625rem;
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;



  @media screen and (max-width: 574px){
    padding: 0rem;
    border: none;
    gap: 40px;
   }
`;
export const ProxySearchWrapper = styled("div")`
    display: flex;
    align-self: center;
    flex: .5;

    @media screen and (max-width: 1028px){
      flex: .5;
    }

    @media screen and (max-width: 976px){
      display:none;
    }
  
   
`;

export const RightHandSideWrapper = styled("div")  `
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex: 1;
    

    @media screen and (max-width: 574px){
      justify-content: space-between;
      gap: 30px
      
     }

   

   
     @media screen and (max-width: 490px){
      justify-content: space-between;

   }
   
     
    
`;
export const SearchFieldWrapper = styled("div")`
    display: flex;
    align-self: center;
    width: 45%;

    @media screen and (max-width: 567px){
      width: 35%;
      flex: .8;
     }
     @media screen and (max-width: 574px){
      flex: .8;
     }
`;
export const TextFieldWrapper = styled("div")`
    align-self: center;
    margin: .5rem 2rem 0rem 1rem;
    width: 30%;
    
    @media screen and (max-width: 592px){
     flex: 1;
     }
`;
export const IconsWrapper = styled("div")`
    display: flex;
    align-self: center;
    gap: 10px;
    justify-content: space-between;
    @media screen and (max-width: 574px){
      gap:10px;
      margin-left: auto;
     }
`;
export const MyProfileWrapper = styled("div")`
    display: flex;
    align-items: center;
    align-self: center;
    background: transparent;
    padding: .2rem;
    border-radius: .5rem;
    cursor: pointer;
   .img-wrapper {
        border: 2px solid transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        @media screen and (max-width: 375px){
          width: 20%;
       }
    img{
        height:100%;
        width: 100%;
        border-radius: 50%;
    } 
   }
   a {
        margin: 0 .8rem;
        font-size: 12px;

        @media screen and (max-width: 375px){
          font-size: 12px;

        }
   }
   .drop-down-icon{
    @media screen and (max-width: 866px){
      display: none;
     }
    @media screen and (max-width: 766px){
      display: block;
     }
   }
   @media screen and (max-width: 574px){
    display: none;
   }
`;
export const DropdownWrapper = styled("div")`
    position: absolute;
    top: 60px;
    left: 35px;
    width: 100%;
   ul{
    background-color: white;
    border: 1px solid var(--grey-100);
    list-style: none;
    font-size: 12px;
    padding: .4rem 1rem;
    border-radius: .5rem;
} 
li{
    padding: .5rem .5rem;
    width: 100%
}
& .logout{
    color: #EB5757;
}
`;
export const DropdownItemsWrapper = styled("div")`
    display: flex;
    justify-content: start;

    & .dropdown-icon{
        margin-top: .3rem;
    }

`;
export const ProfileSettingsWrapper = styled("div")`
   position: relative;
   margin-left: 2rem;

   ${mobile}{
     justify-content: end;
   }
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
    align-items: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    width: 20%;

    @media screen and (max-width: 1185px){
      width: 30%;
      margin-top: .5rem;

    }

      ${tablet}{
        width: 40%;
      margin-top: .5rem;

      }
    
      ${mobileSmall}{
        width: 50%;
        margin-top: 0rem;

      }

      @media screen and (max-width: 376px){
        width: 100%;
        margin-top: .5rem;
  
      }

    

    
     

    
`;