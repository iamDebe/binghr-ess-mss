import React, { useState } from "react";
import { styled } from "goober";
import HorizontalTab from "@/components/HorizontalTab";
import EssLayout from "@/components/EssLayout";
import PersonalInformation from "@/components/essMyProfile/PersonalInformation";
import EmploymentInformation from "@/components/essMyProfile/EmploymentInformation";
import Documents from "@/components/essMyProfile/Documents";
import Security from "@/components/essMyProfile/Security";
import Forms from "@/components/essMyProfile/Forms";
import JobInformation from "@/components/essMyProfile/JobInformation";
import Compensation from "@/components/essMyProfile/Compensation";

const Container = styled("div")`
  width: 100%;
`;

const EssMyProfilePage = () => {
  const [activeTabLabel, setActiveTabLabel] = useState("Personal Information");

  const handleTabClick = (tabName) => {
    setActiveTabLabel(tabName);
  };

  return (
    <EssLayout>
      <Container>
        <HorizontalTab
          tabs={[
            { label: "Personal Information" },
            { label: "Employment Information" },
            { label: "Job Information" },
            { label: "Compensation" },
            { label: "Forms" },
            { label: "Security" },
            { label: "Documents" },
          ]}
          activeTabLabel={activeTabLabel}
          handleTabClick={(label) => {
            handleTabClick(label);
          }}
        />

        <>
          {activeTabLabel === "Personal Information" && <PersonalInformation />}
          {activeTabLabel === "Employment Information" && (
            <EmploymentInformation />
          )}
          {activeTabLabel === "Job Information" && <JobInformation />}
          {activeTabLabel === "Compensation" && <Compensation />}
          {activeTabLabel === "Forms" && <Forms />}
          {activeTabLabel === "Security" && <Security />}
          {activeTabLabel === "Documents" && <Documents />}
        </>
      </Container>
    </EssLayout>
  );
};

export default EssMyProfilePage;
