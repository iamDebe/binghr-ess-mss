import React, { useMemo } from "react";
import { format } from "date-fns";
import ReusableTable from "@/components/ReusableTable";
import { Container } from "@/components/essMyProfile/CommonStyles";

const data = [
  {
    "startdate": "12-03-2023",
    "enddate": "12-03-2023",
    "shedule": "Monthly",
    "amount": "100,000",
    "additionalpay": "100,000"
  },
  {
    "enddate": "09-06-2022",
    "startdate": "12-03-2023",
    "shedule": "Bonus",
    "amount": "700,000",
    "additionalpay": "700,000"
  },
  {
    "startdate": "12-03-2023",
    "enddate": "12-03-2023",
    "shedule": "Car Allowance-Monthly",
    "amount": "100,000",
    "additionalpay": "100,000"
  }
];

const Compensation = () => {
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
        Cell: ({ cell: { value } }) => {
          return (
            <React.Fragment>
              {value ? format(new Date(value), "dd-MM-yyyy") : "N/A"}
            </React.Fragment>
          );
        },
      },
      {
        Header: "End Date",
        accessor: "enddate",
        Cell: ({ cell: { value } }) => {
          return (
            <React.Fragment>
              {value ? format(new Date(value), "dd-MM-yyyy") : "N/A"}
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
      <ReusableTable
        tableColumns={COMPENSATION_TABLE_COLUMNS}
        tableData={data}
        onClick={() => {}}
        pageSizeCount={10}
        searchFieldPlaceholder="Search"
      />
    </Container>
  );
};

export default Compensation;
