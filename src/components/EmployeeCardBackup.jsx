import React, { useState } from 'react';
import { styled } from 'goober';
import { ReactComponent as CollapseDown } from "@/assets/images/collapse-down.svg";
import { ReactComponent as CollapseUp } from "@/assets/images/collapse-up.svg";
import StaffProfileCard from '@/components/StaffProfileCard';

const EmployeeCard = ({
    name, 
    photo, 
    title, 
    department, 
    handleJuniorStaffVisibility, 
    handleSeniorStaffVisibility, 
    employee
}) => {

const [user, setUser] = useState(employee)
const handleShowProfile = () => {
  const temp_user = {...user}
  if(temp_user.showProfile === true){
    temp_user.showProfile = false
  }else{
    temp_user.showProfile = true
  }
  setUser(temp_user)
}

  return (
    <Flex>
      <Wrapper>
        {employee.superior && <div className='icon' > <CollapseUp onClick={handleSeniorStaffVisibility} /></div>}
        <div className='inne' onClick={handleShowProfile}>
          <h4 className='type-title2'>{name}</h4>
          <div className='inner'>
              <div className='photo'>{photo}</div>
              <div className='portfolio'>
                <p className='type-title3'>Job Title: <span className='light'>{title}</span></p>
                <p className='type-title3'>Department: <span className='light'>{department}</span></p>
              </div>
          </div>
        </div>
        {employee?.subordinates?.length > 0 && <div className='icon' > <CollapseDown  onClick={handleJuniorStaffVisibility}/></div>}
      </Wrapper>
      {user.showProfile && 
          <StaffProfileCard 
          employeeId="UT/2016/0929"
          employeeFirstName="Golden"
          employeeLastName="Moses"
          employeeStatus="Active"
          email="mojoface@gmail.com"
          />
      } 
    </ Flex>

  )
}

export default EmployeeCard;

const Flex = styled("div")`
  display: flex;
  gap: 20px;
`;

const Wrapper = styled("div")`
    border: 1px solid var(--grey-200);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-self: start;
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
    }
    .inner{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
        margin-top: .5rem;
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






