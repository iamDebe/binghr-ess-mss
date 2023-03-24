import React from "react";
import { styled } from "goober";
import ListTabsItem from "./ListTabItem";

const Container = styled("div")`
  background: #fcfcfd;
  text-align: center;
  .lw-ul {
    display: flex;
    height: 46px;
  }
`;

const ListTabsWidget = ({ tabs, activeTabLabel, handleTabClick, activeBgColor, activeTextColor }) => {
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
          />
        ))}
      </ul>
    </Container>
  );
};

export default ListTabsWidget;
