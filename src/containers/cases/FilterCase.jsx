import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {DatePicker} from "@material-ui/pickers";
import qs from "qs";
import React, {useState} from "react";
import ListCase from "../../containers/cases/ListCase";
import {getDate, getCurrentDate, formatDate} from "../../utils/date";
import Autocomplete from "../../components/Autocomplete";
import Cases from "../../containers/cases/Cases";
import {API} from "../../services/API";
import {useFetch} from "../../services/useFetch";
import {useQuery} from "../../utils/query";

const useStyles = makeStyles({
  container: {
    minHeight: "400px",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "20px",
    boxShadow: "#29154f4a 0px -8px 21px 0px",
    margin: "20px 0 50px"
  },
  filters: {
    padding: 40
  },
  autocomplete: {
    padding: "40px 0"
  },
  chip: {
    margin: "0 5px"
  }
});

function FilterCase({value, history}) {
  const classes = useStyles();
  const query = useQuery();
  const [isRangeDate, setIsRangeDate] = useState(false);
  const [country, setCountry] = useState(query.get("country") || "");
  const [from, setFrom] = useState(query.get("from") || "");
  const [to, setTo] = useState(query.get("to") || "");

  const countries = useFetch("countries");
  const filteredCases = useFetch(API.date(country, from, to));

  const head = ["Date", "Confirmed", "Deaths", "Recovered"];

  const createQuery = (from, to) => {
    history.push({search: qs.stringify({type: "date", country, ...getDateFilters(from, to)}, {allowDots: true, skipNulls: true})});
  };

  const filterByCountry = (e, value) => {
    if (!value) return history.push("/");
    setCountry(value.Country);
    return history.push(`?type=country&country=${value.Country}`);
  };

  const changeDateFrom = e => {
    const from = getDate(e);
    const to = getCurrentDate(from);
    setFrom(from);
    createQuery(from, to);
  };

  const changeDateTo = e => {
    const to = getDate(e);
    setTo(to);
    setIsRangeDate(true);
    createQuery(getDate(from), to);
  };

  const getType = () => {
    if (isRangeDate) return "rangeDate";
    if (from) return "date";
    return "country";
  };

  const getDateFilters = (from, to) => {
    if (!from) return {};
    return {
      from,
      to: isRangeDate ? to : getCurrentDate(from)
    };
  };

  const deleteCountry = () => {
    setCountry("");
    history.push("/");
  };

  const deleteFrom = () => {
    setFrom("");
    createQuery();
  };

  const deleteTo = () => {
    setIsRangeDate(false);
    setTo("");
    createQuery();
  };

  const getPropsChip = () => {
    return {
      size: "small",
      color: "primary",
      className: classes.chip
    };
  };

  return (
    <Grid item xs={12} className={classes.container}>
      <Grid container direction="column" align="center" justify="center" className={classes.filters}>
        <Grid className={classes.autocomplete}>
          <Autocomplete label="Countries" value={countries.data} onChange={filterByCountry}/>
        </Grid>
        <Grid>
          <DatePicker label="From" value={from} onChange={changeDateFrom}/>
          <DatePicker label="To" value={to} onChange={changeDateTo}/>
        </Grid>
      </Grid>
      <Grid align="center" justify="center">
        {country && <Chip label={`Country (${country})`} onDelete={deleteCountry} {...getPropsChip()} />}
        {from && <Chip label={`From (${formatDate(from)})`} onDelete={deleteFrom} {...getPropsChip()} />}
        {to && isRangeDate && <Chip label={`To (${formatDate(to)})`} onDelete={deleteTo} {...getPropsChip()} />}
      </Grid>
      {filteredCases.data && <Cases title={country} value={filteredCases.data} type={getType()}/>}
      {isRangeDate && filteredCases.data && <ListCase head={head} rows={filteredCases.data}/>}
    </Grid>
  );
}

export default FilterCase;
