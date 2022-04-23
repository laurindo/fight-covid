import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  button: {
    border: 'solid 1px',
    margin: '0 5px',
    borderRadius: '4px',
    padding: '7px'
  },
  select: {
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '4px'
  },
  page: {
    margin: '0 5px',
    color: '#401da5'
  },
  labelPage: {
    color: '#776d93'
  },
  input: {
    padding: '5px 10px'
  }
});

const Pagination = ({
  pageCount,
  pageSize,
  pageIndex,
  pageOptions,
  canPreviousPage,
  canNextPage,
  gotoPage,
  previousPage,
  nextPage,
  setPageSize
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.container}>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className={classes.button}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage} className={classes.button}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage} className={classes.button}>
        {'>'}
      </button>{' '}
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className={classes.button}>
        {'>>'}
      </button>{' '}
      <span className={classes.page}>
        Page{' '}
        {pageIndex + 1} of {pageOptions.length}
      </span>
      <span className={classes.labelPage}>
        | Go to page:{' '}
        <input
          className={classes.input}
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(page)
          }}
          style={{ width: '100px' }}
        />
      </span>{' '}
      <select
        className={classes.select}
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </Grid>
  );
}

export default React.memo(Pagination);