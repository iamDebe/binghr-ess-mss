import React, { Children, useState } from 'react';
import EssLayout from "@/components/EssLayout"
import TopBarWithSearch from "@/components/TopBarWithSearch"
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/ProfilePhoto.svg";

import { styled } from 'goober';
import { mobileSmall } from '@/globalStyle';

const OrgChart = () => {

    const [showJuniorStaff, setShowJuniorStaff] = useState(false);
    const [showSeniorStaff, setSeniorShowStaff] = useState(false);

    const handleJuniorStaffVisibility = () => {
        setShowJuniorStaff(!showJuniorStaff)
    }
    const handleSeniorStaffVisibility = () => {
        setSeniorShowStaff(!showSeniorStaff)
    }

  return (
    <>
        <EssLayout>
            <TopBarWithSearch />
                <OrgChartWrapper>
                {showSeniorStaff &&
                        <ChildrenWrapper>
                            <EmployeeCard 
                            // topIcon={<CollapseUp />}
                            name={"Akinkpelumi"}
                            photo={<ProfilePhoto />}
                            title={"UX Lead"}
                            department={"Product"}
                           
                            // bottomIcon={<CollapseDown />}
                                />
                            <EmployeeCard 
                            // topIcon={<CollapseUp />}
                            name={"Akinkpelumi"}
                            photo={<ProfilePhoto />}
                            title={"UX Lead"}
                            department={"Product"}
                           
                            // bottomIcon={<CollapseDown />}
                            />
                        </ChildrenWrapper>
                    }
                    <ParentWrapper >
                        <EmployeeCard 
                            handleSeniorStaffVisibility={handleSeniorStaffVisibility}
                            name={"Mojo Face"}
                            photo={<ProfilePhoto />}
                            title={"UX Lead"}
                            department={"Product"}
                            handleJuniorStaffVisibility={handleJuniorStaffVisibility}
                        />
                    </ParentWrapper>
                        
                        
                    {showJuniorStaff &&
                        <ChildrenWrapper>
                            <EmployeeCard 
                            // topIcon={<CollapseUp />}
                            name={"Golden Moses"}
                            photo={<ProfilePhoto />}
                            title={"UX Lead"}
                            department={"Product"}
                           
                            // bottomIcon={<CollapseDown />}
                                />
                            <EmployeeCard 
                            // topIcon={<CollapseUp />}
                            name={"Golden Moses"}
                            photo={<ProfilePhoto />}
                            title={"UX Lead"}
                            department={"Product"}
                           
                            // bottomIcon={<CollapseDown />}
                            />
                        </ChildrenWrapper>
                    }
                        
                </OrgChartWrapper>
        </EssLayout>
    </>
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
    align-self: center;
`;

const ChildrenWrapper = styled("div")`
    display: flex;
    justify-content: center;
    gap: 5rem;

    ${mobileSmall}{
        gap: 2rem;
        flex-wrap: wrap;
    }
`;