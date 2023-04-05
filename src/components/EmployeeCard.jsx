import React, { Children } from 'react';
import { styled } from 'goober';
import { ReactComponent as CollapseDown } from "@/assets/images/collapse-down.svg";
import { ReactComponent as CollapseUp } from "@/assets/images/collapse-up.svg";
import { mobileSmall } from '../globalStyle';




const EmployeeCard = ({name, photo, title, department, handleJuniorStaffVisibility, handleSeniorStaffVisibility}) => {
   
    

  return (
    <Wrapper>
        <div className='icon' >{<CollapseUp onClick={handleSeniorStaffVisibility} />}</div>
        <div className='inne'>
            <h4 className='type-title2'>{name}</h4>
            <div className='inner'>
                <div>{photo}</div>
                <div className='portfolio'>
                    <p className='type-title3'>Job Title: <span className='light'>{title}</span></p>
                    <p className='type-title3'>Department: <span className='light'>{department}</span></p>
                </div>
            </div>
        </div>
        <div className='icon' >{<CollapseDown  onClick={handleJuniorStaffVisibility}/>}</div>
    </Wrapper>
  )
}

export default EmployeeCard;

const Wrapper = styled("div")`
    border: 1px solid var(--grey-200);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 1rem;
    cursor: pointer;

    .icon{
        align-self: center;
        cursor: pointer;
    }

    h4{
        text-align: left;
        color: var(--blue-400);

        @media screen and (max-width: 375px){
        }
        
    }

    .inner{
        display: flex;
        justify-content: start;
        gap: 1.5rem;
        margin-top: .5rem;

        @media screen and (max-width: 375px){
        }
    }

    .portfolio{
        display: flex;
        flex-direction: column;
        gap:.5rem;

        .light{
            color: #747577;
        }
    }
`;

