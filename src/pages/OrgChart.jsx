import React, { Fragment, useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
import { styled } from 'goober';
import { mobileSmall } from '@/globalStyle';
import StaffProfileCard from '@/components/StaffProfileCard';
import EmployeeCardChildrenRight from '../components/EmployeeCardChildrenRight';
import EmployeeCardChildrenLeft from '../components/EmployeeCardChildrenLeft';
import TopVerticalLine from '../components/OrgChartLines/TopVerticalLine';
import HorizontalLineRight from '../components/OrgChartLines/HorizontalLineRight';
import HorizontalLineLeft from '../components/OrgChartLines/HorizontalLineLeft';
import BottomVerticalLine from '../components/OrgChartLines/BottomVerticalLine';

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

    const user = {
        superior:{

        },
        subordinates: [
            {},
            {},
            {}
        ]
    }


  return (
    <EssLayout>
        <OrgChartWrapper>
            {showSeniorStaff &&
                <ChildrenWrapper>
                    <div className="">
                        <div>
                           
                            <EmployeeCardChildrenRight
                                name={"Akinkpelumi"}
                                photo={<ProfilePhoto />}
                                title={"UX Lead"}
                                department={"Product"}
                                employee={user.superior}
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
            <ParentWrapper >
                
                    <div>
                        {/* {showSeniorStaff && <TopVerticalLine />}
                        {showJuniorStaff && <BottomVerticalLine />} */}
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
                    {user.subordinates.map((sub, ii) => (
                        <Fragment>
                            {ii % 2 === 0 ?
                                <div className='flex'>
                                    <div>
                                        {/* <TopVerticalLine /> */}
                                        {/* <HorizontalLineLeft /> */}
                                        <EmployeeCardChildrenLeft 
                                            name={"Golden Moses"}
                                            photo={<ProfilePhoto />}
                                            title={"UX Lead"}
                                            department={"Product"}
                                            isSubordinateAvailable={false}
                                            employee={user.subordinates[0]}
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
                                :
                                
                                <div className='flex'>

                                    <div>
                                        <TopVerticalLine />
                                        {/* <HorizontalLineRight /> */}
                                        <EmployeeCardChildrenRight
                                            name={"Golden Moses"}
                                            photo={<ProfilePhoto />}
                                            title={"UX Lead"}
                                            department={"Product"}
                                            employee={user.subordinates[1]}

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
                            }
                        </Fragment>
                       
                        ))}
                    
                        


                    
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

