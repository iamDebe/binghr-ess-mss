import React, { useEffect, useRef, useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';
import { mobileSmall } from '@/globalStyle';
import TopVerticalLine from '@/components/OrgChartLines/TopVerticalLine';
import BottomVerticalLine from '@/components/OrgChartLines/BottomVerticalLine';
import HorizontalLineCenter from '@/components/OrgChartLines/HorizontalLineCenter';
import TopVerticalLineOpen from '../components/OrgChartLines/TopVerticalLineOpen';
import Flex from '../components/OrgChartLines/Flex';

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
    const [user, setUser] = useState({
        showProfile: false,
        superior:{
        },
        subordinates: [
            {
              subordinates:[
                {},
                {}
              ]
            },
            {},
            {},
            {},
           
        ]
    })

    const rightHandSubordinates = user.subordinates.filter((subordinate, index)=>{
        return index % 2 !== 0
    })
    const lefttHandSubordinates = user.subordinates.filter((subordinate, index)=>{
        return index % 2 === 0
    })

    const handleLine = ()=>{
      const subordinateParentJSX = subordinateRef.current;
      const subordinateParent = document.querySelector('#subordinates-parent');
      console.log(subordinateParentJSX)
      // const divWidth = window.getComputedStyle(subordinateParent).getPropertyValue("width");
      // console.log(divWidth);

      // const subordinateCard = subordinateCardRef.current;
      // const subordinateCardWidth = window.getComputedStyle(subordinateCard).getPropertyValue("width");
      // console.log(subordinateCard);
    }

    // useEffect(() => {
    //   const subordinateParentJSX = subordinateRef.current;
    //   const subordinateCard = subordinateCardRef.current;
      
    //   if(typeof(subordinateParentJSX) !== 'undefined'){
    //     const divWidth = window.getComputedStyle(subordinateParentJSX).getPropertyValue("width");
    //     console.log(divWidth)
    //   }

    //   if(typeof(subordinateCard) !== 'undefined'){
    //     const subordinateCardWidth = window.getComputedStyle(subordinateCard).getPropertyValue("width");
    //     console.log(subordinateCardWidth);
    //   }
     
    // })
    
  return (
    <EssLayout>
        <OrgChartWrapper>
          {showSeniorStaff &&
          <ChildrenWrapper>
            <div>
              <EmployeeCard
                name={"Akinkpelumi"}
                photo={<ProfilePhoto />}
                title={"UX Lead"}
                department={"Product"}
                employee={user.superior}
              />
            </div>
          </ChildrenWrapper>
          }
          <ParentWrapper>
            <div>
              {showSeniorStaff && <TopVerticalLine />}
               {!showProfileCard ? <TopVerticalLine /> : ""}
              {showJuniorStaff && (<BottomVerticalLine />)} 
              <EmployeeCard 
                  handleSeniorStaffVisibility={handleSeniorStaffVisibility}
                  handleShowProfileCard={handleShowProfileCard}
                  name={"Mojo Face"}
                  photo={<ProfilePhoto />}
                  title={"UX Lead"}
                  department={"Product"}
                  handleJuniorStaffVisibility={handleJuniorStaffVisibility}
                  employee={user}
              />
            </div>
            
          </ParentWrapper>
          {showJuniorStaff &&
          <div className='flex' ref={subordinateRef} id='subordinates-parent'>
            <ChildrenWrapperLeft>
              {lefttHandSubordinates.map((subordinate, index)=>(
                <div className='flex' key={index} >
                  <div>
                    <TopVerticalLine />
                    <HorizontalLineCenter />
                    <EmployeeCard 
                        name={"Golden Moses"}
                        photo={<ProfilePhoto />}
                        title={"UX Lead"}
                        department={"Product"}
                        isSubordinateAvailable={false}
                        employee={user.subordinates[0]}
                        handleJuniorStaffVisibility={handleJuniorStaffVisibility}

                    />
                  </div>
                </div>
              ))}
            </ChildrenWrapperLeft>
            <ChildrenWrapperRight>
              {rightHandSubordinates.map((subordinate, index)=>(
                <div className='flex' key={index}>
                  <div>
                    <TopVerticalLine />
                    <HorizontalLineCenter />
                    <EmployeeCard 
                        name={"Golden Moses"}
                        photo={<ProfilePhoto />}
                        title={"UX Lead"}
                        department={"Product"}
                        isSubordinateAvailable={true}
                        employee={user.subordinates[0]}
                    />
                  </div>
                </div>
              ))}
            </ChildrenWrapperRight>
          </div>
          }
        </OrgChartWrapper>
    </EssLayout>
  )
}

export default OrgChart;

const OrgChartWrapper = styled("div")`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin-top: 2rem;
    padding: 1rem;

    .flex{
      display: flex;
      flex-wrap: nowrap;
      gap: 10px;
    }
    ${mobileSmall}{
        gap: 2rem;
    }
`;

const ParentWrapper = styled("div")`
  display: flex;
  gap: 20px;
  align-self: center;
  .me{
    align-self: start;
    border:2px solid red;
  }
`;

const ChildrenWrapper = styled("div")`
  display: flex;
  gap: 10px;
  .flex{
    display: flex;
    gap: 20px;
  }
${mobileSmall}{
  gap: 2rem;
  flex-wrap: wrap;
}
`;
const ChildrenWrapperLeft = styled("div")`
  display: flex;
  gap: 10px;
  .flex{
    display: flex;
    gap: 20px;
  }
${mobileSmall}{
  gap: 2rem;
  flex-wrap: wrap;
}
`;
const ChildrenWrapperRight = styled("div")`
  display: flex;
  gap: 10px;
  .flex{
    display: flex;
    gap: 20px;
  }
${mobileSmall}{
  gap: 2rem;
  flex-wrap: wrap;
}
`;



