import React, { useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';
import { mobileSmall } from '@/globalStyle';
import StaffProfileCard from '@/components/StaffProfileCard';

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

  return (
    <EssLayout>
        <OrgChartWrapper>
            {showSeniorStaff &&
                <ChildrenWrapper>
                    <div className="flex">
                        <div>
                            <EmployeeCard 
                                name={"Akinkpelumi"}
                                photo={<ProfilePhoto />}
                                title={"UX Lead"}
                                department={"Product"}
                                isSuperiorAvailable={false}
                                isSubordinateAvailable={false}
                            />
                        </div>
                        {showProfileCard && 
                            <StaffProfileCard 
                                employeeId="UT/2016/0929"
                                employeeFirstName="Golden"
                                employeeLastName="Moses"
                                employeeStatus="Active"
                                email="mojoface@gmail.com"
                            />
                        } 
                    </div>
                </ChildrenWrapper>
            }
            <ParentWrapper >
               
                    <div>
                        <EmployeeCard 
                            handleSeniorStaffVisibility={handleSeniorStaffVisibility}
                            handleShowProfileCard={handleShowProfileCard}
                            name={"Mojo Face"}
                            photo={<ProfilePhoto />}
                            title={"UX Lead"}
                            department={"Product"}
                            handleJuniorStaffVisibility={handleJuniorStaffVisibility}
                            isSuperiorAvailable={true}
                            isSubordinateAvailable={true}
                        />
                    </div>
                    {showProfileCard && 
                        <StaffProfileCard 
                            employeeId="UT/2016/0929"
                            employeeFirstName="Mojo"
                            employeeLastName="Face"
                            employeeStatus="Active"
                            email="mojoface@gmail.com"
                        />
                    }
                
            </ParentWrapper>
            {showJuniorStaff &&
                <ChildrenWrapper>
                    <div className='flex'>
                        <div>
                            <EmployeeCard 
                                name={"Golden Moses"}
                                photo={<ProfilePhoto />}
                                title={"UX Lead"}
                                department={"Product"}
                                isSubordinateAvailable={true}
                                // handleShowProfileCard={handleShowProfileCard}

                            />
                        </div>
                        {showProfileCard && 
                            <StaffProfileCard 
                                employeeId="UT/2016/0929"
                                employeeFirstName="Golden"
                                employeeLastName="Moses"
                                employeeStatus="Active"
                                email="mojoface@gmail.com"
                            />
                         } 
                    </div>
                        


                    <div className='flex'>

                        <div>
                            <EmployeeCard 
                                name={"Golden Moses"}
                                photo={<ProfilePhoto />}
                                title={"UX Lead"}
                                department={"Product"}
                                isSubordinateAvailable={true}
                                // handleShowProfileCard={handleShowProfileCard}

                            />
                        </div>
                        {showProfileCard && 
                            <StaffProfileCard 
                                employeeId="UT/2016/0929"
                                employeeFirstName="Golden"
                                employeeLastName="Moses"
                                employeeStatus="Active"
                                email="mojoface@gmail.com"
                            />
                        }
                    </div>
                </ChildrenWrapper>
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
    justify-content: center;
    gap: 5rem;

        .flex{
            display: flex;
            gap: 20px;
        }
    ${mobileSmall}{
        gap: 2rem;
        flex-wrap: wrap;
    }
`;