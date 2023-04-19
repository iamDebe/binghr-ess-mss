import React, { useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';
import {authUser} from '@/utils/user';

const OrgChart = () => {
  const [showJuniorStaff, setShowJuniorStaff] = useState(false);
  const [showSeniorStaff, setSeniorShowStaff] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const handleShowProfileCard = ()=>{
    setShowProfileCard(!showProfileCard)
  }
  const handleJuniorStaffVisibility = () => {
    setShowJuniorStaff(!showJuniorStaff)
    setShowProfileCard(false)
  }
  const handleSeniorStaffVisibility = () => {
    setSeniorShowStaff(!showSeniorStaff)
    setShowProfileCard(false)
  }
  const [user, setUser] = useState(authUser);
  
    
  return (
    <EssLayout>
      <ParentWrapper>
        <div className='auth'>
          <EmployeeCard 
            handleSeniorStaffVisibility={handleSeniorStaffVisibility}
            handleShowProfileCard={handleShowProfileCard}
            photo={<ProfilePhoto />}
            handleJuniorStaffVisibility={handleJuniorStaffVisibility}
            employee={user}
          />
        </div>
      </ParentWrapper>
    </EssLayout>
  )
}

export default OrgChart;

const ParentWrapper = styled("div")`
  display: flex;
  justify-content: center;
  width:100%;
    .auth{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:100%;
    }
`;







