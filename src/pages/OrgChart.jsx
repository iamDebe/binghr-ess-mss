import React, { useEffect, useRef, useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';
import { mobileSmall } from '@/globalStyle';
import TopVerticalLine from '@/components/OrgChartLines/TopVerticalLine';
import BottomVerticalLine from '@/components/OrgChartLines/BottomVerticalLine';
import HorizontalLineCenter from '@/components/OrgChartLines/HorizontalLineCenter';
import {authUser} from '../utils/user';

const OrgChart = () => {
  const [showJuniorStaff, setShowJuniorStaff] = useState(false);
  const [showSeniorStaff, setSeniorShowStaff] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const subordinateRef = useRef();
  const subordinateCardRef = useRef();


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

    const handleLine = ()=>{
      const subordinateParentJSX = subordinateRef.current;
      const subordinateParent = document.querySelector('#subordinates-parent');
      console.log(subordinateParentJSX)
      
    }

    
  return (
    <EssLayout>
          <ParentWrapper>
            <div className='auth'>
               {/* {!showProfileCard ? <TopVerticalLine /> : ""} */}
              {/* {!showJuniorStaff && (<BottomVerticalLine />)}  */}
              {/* <TopVerticalLine />  */}
              <BottomVerticalLine />
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



  
.auth{
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;







