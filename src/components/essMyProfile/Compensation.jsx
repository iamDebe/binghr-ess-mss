import React, { useMemo, useState } from "react";
import { format } from "date-fns";
import { styled } from "goober";
import Spacer from "../Spacer";
import ReusableTable from "../ReusableTable";
import COMPENSATION_DATA from "../../mockData/COMPENDATION_DATA.json";

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const Inner = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.625rem;
  gap: 2rem;
  .type-title3 {
    color: var(--grey-400);
  }
  .type-body2 {
    color: var(--grey-300);
  }
`;

const Compensation = ({ continueAction, goBack, saveData }) => {
  const COMPENSATION_TABLE_COLUMNS = useMemo(
    () => [
      {
        Header: "Shedule",
        accessor: "shedule",
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ cell: { value } }) => {
          return <React.Fragment>{value}</React.Fragment>;
        },
      },
      {
        Header: "Start Date",
        accessor: "startdate",
        Cell: ({ cell: { value }, row }) => {
          return (
            <React.Fragment>
              {value ? format(new Date(value), "dd/MM/yyyy") : "N/A"}
            </React.Fragment>
          );
        },
      },
      {
        Header: "End Date",
        accessor: "enddate",
        Cell: ({ cell: { value }, row }) => {
          return (
            <React.Fragment>
              {value ? format(new Date(value), "dd/MM/yyyy") : "N/A"}
            </React.Fragment>
          );
        },
      },
      {
        Header: "Additional Pay",
        accessor: "additionalpay",
      },
    ],
    []
  );

  return (
    <Container>
      <Inner>
        <p className="type-title3">Compensation</p>
        <Spacer height={5} />
        <ReusableTable
          tableColumns={COMPENSATION_TABLE_COLUMNS}
          tableData={COMPENSATION_DATA}
          onClick={(data) => {}}
          pageSizeCount={10}
          searchFieldPlaceholder="Search"
        />
      </Inner>
    </Container>
  );
};

export default Compensation;
