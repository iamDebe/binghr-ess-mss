import React, { useState } from 'react';
import EssLayout from "@/components/EssLayout";
import EmployeeCard from '@/components/EmployeeCard';
import { ReactComponent as ProfilePhoto } from "@/assets/images/mojoface.svg";
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
    <EssLayout>
        <OrgChartWrapper>
            {showSeniorStaff &&
                <ChildrenWrapper>
                    <EmployeeCard 
                    name={"Akinkpelumi"}
                    photo={<ProfilePhoto />}
                    title={"UX Lead"}
                    department={"Product"}
                        />
                    <EmployeeCard 
                    name={"Akinkpelumi"}
                    photo={<ProfilePhoto />}
                    title={"UX Lead"}
                    department={"Product"}
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
                    name={"Golden Moses"}
                    photo={<ProfilePhoto />}
                    title={"UX Lead"}
                    department={"Product"}
                        />
                    <EmployeeCard 
                    name={"Golden Moses"}
                    photo={<ProfilePhoto />}
                    title={"UX Lead"}
                    department={"Product"}
                    />
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