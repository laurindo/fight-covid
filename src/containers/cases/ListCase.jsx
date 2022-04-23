import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { formatValues } from "../../utils/date";
import React from "react";

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
  return (
    <Grid item xs={12} className={classes.container}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.head.map((title, i) => (
                <TableCell key={i}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {props.rows && props.rows.length ? (
            <TableBody>
              {props.rows.map(row => (
                <TableRow key={row.name}>
                  {props.head.map((title, i) => {
                    const result = formatValues(title, row[title])
                    debugger;
                    return (
                      <TableCell key={i}>{result}</TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
        {!props?.rows?.length && <div className={classes.containerNoData}>no data</div>}
      </TableContainer>
    </Grid>
  );
}

export default ListCase;
