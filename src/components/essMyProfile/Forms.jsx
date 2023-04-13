import React, { useState } from "react";
import { Container, TabFormsWrapper } from "@/components/essMyProfile/CommonStyles";
import { styled } from "goober";
import HorizontalTab from "../HorizontalTab";
import Button from "../button";

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Forms = ({ }) => {
  const [activeTabLabel, setActiveTabLabel] = useState("General");
  const handleTabClick = (tabName) => {
    setActiveTabLabel(tabName);
  };

  
  return (
    <Container>
      <Inner>
        <HorizontalTab
          tabs={[
            { label: "General" },
            { label: "HR Forms" },
            { label: "Recruiting Forms" },
            { label: "Payroll Forms" },
          ]}
          activeTabLabel={activeTabLabel}
          handleTabClick={(label) => {
            handleTabClick(label);
          }}
          miniBorderTab
        />
        {activeTabLabel === "General" && (
          <TabFormsWrapper>
            <p className="type-title3">General</p>
            <div className="form-rows">
              <div className="row">
                <p className="type-body3">Direct Manager Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
              <div className="row">
                <p className="type-body3">Compensation Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
            </div>
          </TabFormsWrapper>
        )}
        {activeTabLabel === "HR Forms" && (
          <TabFormsWrapper>
            <p className="type-title3">HR Forms</p>
            <div className="form-rows">
              <div className="row">
                <p className="type-body3">Direct Manager Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
              <div className="row">
                <p className="type-body3">Compensation Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
            </div>
          </TabFormsWrapper>
        )}
        {activeTabLabel === "Recruiting Forms" && (
          <TabFormsWrapper>
            <p className="type-title3">Recruiting Forms</p>
            <div className="form-rows">
              <div className="row">
                <p className="type-body3">Direct Manager Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
              <div className="row">
                <p className="type-body3">Compensation Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
            </div>
          </TabFormsWrapper>
        )}
        {activeTabLabel === "Payroll Forms" && (
          <TabFormsWrapper>
            <p className="type-title3">Payroll Forms</p>
            <div className="form-rows">
              <div className="row">
                <p className="type-body3">Direct Manager Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
              <div className="row">
                <p className="type-body3">Compensation Change Form</p>
                <Button
                  bg="var(--grey-25)"
                  border="var(--lilac-400)"
                  textcolor="var(--lilac-400)"
                  width="109px"
                >
                  View
                </Button>
              </div>
            </div>
          </TabFormsWrapper>
        )}
      </Inner>
    </Container>
  );
};

export default Forms;
