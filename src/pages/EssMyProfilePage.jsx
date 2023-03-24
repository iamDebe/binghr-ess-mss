import React, { useState } from "react";
import { styled } from "goober";
import ListTabsWidget from "../components/ListTabWidget";
import EssLayout from "../components/EssLayout";
import PersonalInformation from "../components/essMyProfile/PersonalInformation";
import EmploymentInformation from "../components/essMyProfile/EmploymentInformation";
import Documents from "../components/essMyProfile/Documents";
import Security from "../components/essMyProfile/Security";
import Forms from "../components/essMyProfile/Forms";
import JobInformation from "../components/essMyProfile/JobInformation";
import Compensation from "../components/essMyProfile/Compensation";

// MARGIN TOP IS TEMPORARY

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
  margin-top: 100px;
  .onboarding-div {
    width: 70%;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 375px) and (max-width: 969px) {
      width: 100%;
      flex-wrap: wrap;
      padding-top: 10px;
      padding-bottom: 10px;
      div {
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
  }
`;

const EssMyProfilePage = () => {
  const [activeTabLabel, setActiveTabLabel] = useState("Personal Information");

  const handleTabClick = (tabName) => {
    setActiveTabLabel(tabName);
  };

  return (
    <EssLayout>
      <Container>
        <ListTabsWidget
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

        <div>
          {activeTabLabel === "Personal Information" && <PersonalInformation />}

          {activeTabLabel === "Employment Information" && (
            <EmploymentInformation />
          )}
          {activeTabLabel === "Job Information" && <JobInformation />}
          {activeTabLabel === "Compensation" && <Compensation />}
          {activeTabLabel === "Forms" && <Forms />}
          {activeTabLabel === "Security" && <Security />}
          {activeTabLabel === "Documents" && <Documents />}
        </div>
      </Container>
    </EssLayout>
  );
};

export default EssMyProfilePage;
