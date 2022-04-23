import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { formatValues } from "../../utils/date";
import { useTable, usePagination } from 'react-table';
import Pagination from '../../components/Pagination';

const useStyles = makeStyles({
  container: {
    padding: 20,
    borderRadius: "20px",
    boxShadow: "#7d50d34a 0px -8px 21px 0px",
    margin: "50px 20px"
  },
  containerNoData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    margin: '0 auto',
    color: '#ccc'
  }
});

function ListCase(props) {
  const classes = useStyles();
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'Date',
        Cell: props => formatValues('Date', props.value)
      },
      {
        Header: 'Confirmed',
        accessor: 'Confirmed',
      },
      {
        Header: 'Deaths',
        accessor: 'Deaths',
      },
      {
        Header: 'Recovered',
        accessor: 'Recovered',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: props?.rows || [],
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  return (
    <Grid item xs={12} className={classes.container}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table"  {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          {page.length ? (
            <TableBody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row)
                return (
                  <TableRow key={row.name} {...row.getRowProps()}>
                    {row.cells.map((cell, i) => {
                      return (
                        <TableCell key={i} {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                      );
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          ) : null}
        </Table>

        {!page?.length && <div className={classes.containerNoData}>no data</div>}

        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />

      </TableContainer>
    </Grid>
  );
}

export default ListCase;
