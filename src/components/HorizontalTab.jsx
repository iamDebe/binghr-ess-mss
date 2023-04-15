import React from "react";
import { styled } from "goober";
import ListTabsItem from "@/components/HorizontalTabItem";
import { mobileMedium } from "@/globalStyle";

const tabStyles = `
  width: 100%;
  text-align: center;
  .lw-ul {
    display: flex;
    width: 100%;
    overflow-x: auto;
  }
`;

const HorizontalTab = ({
  tabs,
  activeTabLabel,
  handleTabClick,
  miniBorderTab
}) => {

  const miniBorderTabStyles = `
    background: var(--grey-25);
    padding: 2px;
    border: 1px solid var(--grey-200);
    border-radius: var(--br);
    width: fit-content;
    ${mobileMedium} {
      width: 100%;
    }
  `;

  const Container = styled("div")`
    ${tabStyles}
    ${miniBorderTab ? miniBorderTabStyles : ""}
  `;

  return (
    <Container>
      <ul className="lw-ul">
        {tabs.map((tab, idx) => (
          <ListTabsItem
            key={`${tab.label}_${idx}`}
            isActive={tab.label === activeTabLabel}
            onClick={() => {
              handleTabClick(tab.label, tab.urlParam);
            }}
            label={tab.label}
            miniBorderTab={miniBorderTab}
          />
        ))}
      </ul>
    </Container>
  );
};

export default HorizontalTab;
