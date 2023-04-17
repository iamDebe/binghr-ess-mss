import { useMemo } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { styled } from "goober";
import { TextField } from "@/components/forms";
import { ReactComponent as SearchIcon } from "@/assets/images/search.svg";
import { ReactComponent as ArrowLeft } from "@/assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "@/assets/images/arrow-right.svg";
import Button from '@/components/button';

const Container = styled("div")`
  width: 100%;
  background: var(--white);
  border: 1px solid var(--grey-5);
  border-radius: var(--br);
  padding: 0.75rem 0;

  table {
    border-collapse: collapse;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    td, th {
      padding: 8px;
      text-align: left;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      background-color: var(--grey-50);
      color: var(--grey-400);
      text-align: left;
      &:nth-child(1) {
        padding-left: 2.25rem;
      }
    }
    td {
      color: var(--grey-300);
    }
    tr {
      td {
        &:nth-child(1) {
          padding-left: 2.25rem;
          color: var(--grey-400);
        }
      }
    }
  }

  .searchField-div {
    width: 200px;
    margin-bottom: 0.75rem;
    margin-left: 2.25rem;
  }
  .tb-tr {
    cursor: pointer;
    &:nth-child(even) {
      background-color: var(--grey-50);
    }
  }
`;

const PaginationContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 2.25rem;
  .pg-btn {
    width: 35px;
    height: 35px;
  }
  .pg-span1 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--br);
    background: var(--lilac-400);
    color: var(--grey-25);
    width: 35px;
    height: 35px;
  }
  .pg-span2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--grey-5);
    border-radius: var(--br);
    color: var(--lilac-400);
    width: 35px;
    height: 35px;
  }
`;

const Table = ({
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
              icon={<SearchIcon stroke="#E3E3E3" className="input-icon left-icon" />}
              marginbottom="0"
              padding="0.5rem 1rem 0.5rem 2.4rem"
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
                  <th className="type-title3" {...column.getHeaderProps()}>
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
                        className="type-body3"
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
          <Button
            className="pg-btn"
            bg="var(--grey-5)"
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
            iconcolor={!canPreviousPage ? "var(--grey-300)" : "var(--grey-400)"}
          >
            <ArrowLeft
              stroke={!canPreviousPage ? "var(--grey-300)" : "var(--grey-400)"}
            />
          </Button>
          <span className="pg-span1">{pageIndex + 1}</span>
          of <span className="pg-span2">{pageOptions.length}</span>
          <Button
            disabled={!canNextPage}
            onClick={() => nextPage()}
            className="pg-btn"
            bg="var(--grey-5)"
            iconcolor={!canPreviousPage ? "var(--grey-300)" : "var(--grey-400)"}
          >
            <ArrowRight
              stroke={!canPreviousPage ? "var(--grey-300)" : "var(--grey-400)"}
            />
          </Button>
        </PaginationContainer>
      )}
    </Container>
  );
};

export default Table;
