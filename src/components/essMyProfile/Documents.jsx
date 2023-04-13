import React, { useMemo } from "react";
import { format } from "date-fns";
import ReusableTable from "@/components/ReusableTable";
import { Container } from "@/components/essMyProfile/CommonStyles";
import { ReactComponent as DownloadFile } from "@/assets/images/download-file.svg";

const data = [
  {
    "documentname": "Payroll Policy",
    "signedoffdate": "12-03-2023",
    "issignedoff": "Yes",
    "action": "View",
  },
  {
    "documentname": "Attendance Policy",
    "signedoffdate": "12-03-2023",
    "issignedoff": "No",
    "action": "View",
  },
  {
    "documentname": "Employee Report Policy",
    "signedoffdate": "12-03-2023",
    "issignedoff": "No",
    "action": "View",
  }
];

const Documents = () => {
  const COMPENSATION_TABLE_COLUMNS = useMemo(
    () => [
      {
        Header: "Document Name",
        accessor: "documentname",
      },
      {
        Header: "Is Signed off",
        accessor: "issignedoff",
      },
      {
        Header: "Signed off Date",
        accessor: "signedoffdate",
        Cell: ({ cell: { value }, row }) => {
          return (
            <React.Fragment>
              {value ? format(new Date(value), "dd-MM-yyyy") : "N/A"}
            </React.Fragment>
          );
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ value }) => (
          <div className="action-field">
            {value.startsWith("View") ? (
              <>
                View{" "}
                <div className="action-icon">
                  <DownloadFile stroke="var(--grey-400)" />
                </div>
              </>
            ) : (
              value
            )}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <Container>
      <ReusableTable
        tableColumns={COMPENSATION_TABLE_COLUMNS}
        tableData={data}
        onClick={(data) => {}}
        pageSizeCount={10}
        searchFieldPlaceholder="Search"
      />
    </Container>
  );
};

export default Documents;
