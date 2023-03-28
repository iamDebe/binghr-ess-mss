import { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { styled } from "goober";
import { TextField } from "./forms";
import Spacer from "./Spacer";

const Container = styled("div")`
  width: 100%;
  background: white;
  margin-bottom: 16px;
  line-height: 1.5;
  border: 1px solid #ddd;
  padding: 10px;

  table {
    border-collapse: collapse;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  table td,
  table th {
    padding: 8px;
    color: #bbbec4;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #f9fafb;
    color: #667085;
    font-weight: 500;
    font-size: 14px;
  }

  .searchField-div {
    width: 200px;
    padding-bottom: 5px;
    margin-left: 10px;
  }
  .tb-tr {
    padding: 20px;
    cursor: pointer;
    height: 70px;
  }
`;

const PaginationContainer = styled("div")`
  width: 100%;
  display: flex;

  align-items: center;
  margin-right: 16px;
  margin-top: 5px;
  .pg-btn {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-contents: center;
    margin: auto 0;
    border; 1px solid #ddd;
    border-radius: 4px;
  }
  .pg-span1 {
    display: flex;
    align-items: center;
    justify-contents: center;
    border; 1px solid #ddd;
    border-radius: 4px;
    background: #6c3787;
    color: #fff;
    margin: auto 5px;
    width: 35px;
    height: 35px;
  }
  .pg-span2 {
    display: flex;
    align-items: center;
    justify-contents: center;
    border; 1px solid #ddd;
    border-radius: 4px;
    color: #6c3787;
    margin: auto 5px;
    width: 35px;
    height: 35px;
  }
`;

const ReusableTable = ({
  searchFieldPlaceholder = "",
  tableColumns,
  tableData,
  onClick,
  pageSizeCount = 5,
  showTitleHideSearch = false,
  title = "",
  showPagination = false,
}) => {
  const data = useMemo(() => tableData, [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns: tableColumns,
      data,
      initialState: { pageIndex: 0, pageSize: pageSizeCount },
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <Container>
      <div className="">
        {!showTitleHideSearch ? (
          <div className="searchField-div">
            <TextField
              placeholder={searchFieldPlaceholder}
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              name=""
            />
          </div>
        ) : title ? (
          <p className="type-title3">{title}</p>
        ) : null}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="type-title2" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="tb-tr" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => {
                          onClick(row?.original);
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* TABLE PAGINATION */}
      {showPagination && (
        <PaginationContainer>
          <button
            className="pg-btn"
            style={{
              cursor: !canPreviousPage ? "not-allowed" : "pointer",
              color: !canPreviousPage ? "#ddd" : "#3D874E",
            }}
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
          >
            {"<"}
          </button>
          <span className="pg-span1">{pageIndex + 1}</span>
          of <span className="pg-span2">{pageOptions.length}</span>
          <Spacer width={5} />
          <button
            disabled={!canNextPage}
            onClick={() => nextPage()}
            className="pg-btn"
            style={{
              cursor: !canNextPage ? "not-allowed" : "pointer",
              color: !canNextPage ? "#ddd" : "#3D874E",
              marginRight: "16px",
            }}
          >
            {">"}
          </button>
        </PaginationContainer>
      )}
      <Spacer height={10} />
    </Container>
  );
};

export default ReusableTable;
