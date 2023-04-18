import React, { useState } from 'react';
import { styled } from 'goober';
import { ReactComponent as CollapseDown } from "@/assets/images/collapse-down.svg";
import { ReactComponent as CollapseUp } from "@/assets/images/collapse-up.svg";
import StaffProfileCard from '@/components/StaffProfileCard';
import TopVerticalLine from '@/components/OrgChartLines/TopVerticalLine';
import BottomVerticalLine from '@/components/OrgChartLines/BottomVerticalLine';
import HorizontalLineCenter from '@/components/OrgChartLines/HorizontalLineCenter';
import { mobileSmall } from '@/globalStyle';

const EmployeeCard = ({
    photo, 
    handleJuniorStaffVisibility, 
    handleSeniorStaffVisibility, 
    employee,
    indices
}) => {

const [showSubordinate, setShowSubordinate] = useState(false);
const [showSuperior, setShowSuperior] = useState(false);
const [user, setUser] = useState(employee)

const handleShowSuperior = () => {
  setShowSuperior(!showSuperior)
}

const handleShowSubordinate = () => {
  setShowSubordinate(!showSubordinate)
}
 
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
    <>
      <div className='grand'>
        {
          employee?.superior !== null && showSuperior === true &&

          <ChildrenWrapper>
            <div >
              <EmployeeCard
                photo={photo}
                employee={employee?.superior}
              />
            </div>
          </ChildrenWrapper>
        }
      
        <Wrapper className='unknown'>
          {employee?.superior && <div className='icon' > <CollapseUp onClick={handleShowSuperior} /></div>}
          <div  onClick={handleShowProfile}>
            <h4 className='type-title2'>{employee?.name}</h4>
            <div className='inner'>
                <div className='photo'>{photo}</div>
                <div className='portfolio'>
                  <p className='type-title3'>Job Title: <span className='light'>{employee?.job_title}</span></p>
                  <p className='type-title3'>Department: <span className='light'>{employee?.department}</span></p>
                </div>
            </div>
          </div>
          {employee?.subordinates?.length > 0 && <div className='icon' > <CollapseDown  onClick={handleShowSubordinate}/></div>}
        </Wrapper>
        {employee.showProfile && 
            <StaffProfileCard 
            employeeId="UT/2016/0929"
            employeeFirstName="Golden"
            employeeLastName="Moses"
            employeeStatus="Active"
            email="mojoface@gmail.com"
            />
        } 
      </ div>

      {employee?.subordinates?.length > 0 && showSubordinate === true &&
      <>
        <HorizontalLineCenter />
        <ChildrenWrapperLeft >
          {user.subordinates.map((subordinate, index)=>(
            <div key={index} >
              <div  className='wow'>
                <TopVerticalLine />
                <EmployeeCard 
                    photo={photo}
                    employee={employee.subordinates[index]}
                    handleJuniorStaffVisibility={handleJuniorStaffVisibility}
                />
              </div>
            </div>
          ))}
        </ChildrenWrapperLeft>
      </>
      }
    </>
    
  );
}

export default EmployeeCard;

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




const ChildrenWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0rem 0rem 2rem 0rem;

  
${mobileSmall}{
  gap: 2rem;
  flex-wrap: wrap;
}
`;
const ChildrenWrapperLeft = styled("div")`
  margin-top: 5rem;
  display: flex;
  gap: 5px;


  .wow{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .unknown{
    align-items: center; 
  }
 

`;






