import React, { useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';
import { mobileSmall } from '@/globalStyle';
import TopVerticalLine from '@/components/OrgChartLines/TopVerticalLine';
import BottomVerticalLine from '@/components/OrgChartLines/BottomVerticalLine';
import HorizontalLineCenter from '@/components/OrgChartLines/HorizontalLineCenter';

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
    const [user, setUser] = useState({
        showProfile: false,
        superior:{
        },
        subordinates: [
            {},
            {},
            {},
            {}
        ]
    })

    const rightHandSubordinates = user.subordinates.filter((subordinate, index)=>{
        return index % 2 !== 0
    })
    const lefttHandSubordinates = user.subordinates.filter((subordinate, index)=>{
        return index % 2 === 0
    })


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
          <ParentWrapper >
            <div>
              {/* {showSeniorStaff && <TopVerticalLine />} */}
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
            <Flex>
              <ChildrenWrapperLeft>
                {lefttHandSubordinates.map(()=>(
                  <div className='flex'>
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
                      />
                    </div>
                  </div>
                ))}
              </ChildrenWrapperLeft>
              <ChildrenWrapperRight>
                {rightHandSubordinates.map(()=>(
                  <div className='flex'>
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
                      />
                    </div>
                  </div>
                ))}
              </ChildrenWrapperRight>
            </Flex>
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

const Flex = styled("div")`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
`;

