import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import qs from "qs";
import React, { useState } from "react";
import ListCase from "../../containers/cases/ListCase";
import { getDate, getCurrentDate, formatDate } from "../../utils/date";
import Autocomplete from "../../components/Autocomplete";
import Cases from "../../containers/cases/Cases";
import { API } from "../../services/API";
import { useFetch } from "../../services/useFetch";
import { useQuery } from "../../utils/query";

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

const LIST_CITY = [{
  label: 'Brazil',
  value: 'brazil'
}, {
  label: 'United States',
  value: 'United States'
}, {
  label: 'Canada',
  value: 'Canada'
}]

function FilterCase({ value, history }) {
  const classes = useStyles();
  const query = useQuery();
  const [isRangeDate, setIsRangeDate] = useState(false);
  const [country, setCountry] = useState(query.get("country") || "");
  const [from, setFrom] = useState(query.get("from") || "");
  const [to, setTo] = useState(query.get("to") || "");

  // const countries = useFetch("countries");
  const filteredCases = useFetch(API.date(country, from));

  const head = ["Date", "Cases", "Deaths", "Suspects", "Refuses"];

  const createQuery = (from) => {
    history.push({
      search: qs.stringify(
        { type: "date", country, ...getDateFilters(from) },
        { allowDots: true, skipNulls: true }
      )
    });
  };

  const filterByCountry = (e, value) => {
    if (!value) return history.push("/");
    setCountry(value.value);
    return history.push(`?type=country&country=${value.value}`);
  };

  const changeDateFrom = (e) => {
    const from = getDate(e);
    setFrom(from);
    createQuery(from);
  };

  const getType = () => {
    if (isRangeDate) return "rangeDate";
    if (from) return "date";
    return "country";
  };

  const getDateFilters = (from) => {
    if (!from) return {};
    return { from };
  };

  const deleteCountry = () => {
    setCountry("");
    history.push("/");
  };

  const deleteFrom = () => {
    setFrom('');
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
      <Grid
        container
        direction="column"
        align="center"
        justify="center"
        className={classes.filters}
      >
        <Grid className={classes.autocomplete}>
          <Autocomplete
            label="Countries"
            value={LIST_CITY}
            onChange={filterByCountry}
          />
        </Grid>
        <Grid>
          <DatePicker label="From" value={from} onChange={changeDateFrom} error={false} invalidDateMessage={false} />
        </Grid>
      </Grid>
      <Grid align="center" justify="center">
        {country && (
          <Chip
            label={`Country (${country?.toUpperCase() || '-'})`}
            onDelete={deleteCountry}
            {...getPropsChip()}
          />
        )}
        {from && (
          <Chip
            label={`From (${formatDate(from)})`}
            onDelete={deleteFrom}
            {...getPropsChip()}
          />
        )}
      </Grid>
      <Cases
        title={country.toUpperCase()}
        value={filteredCases?.data || []}
        type={getType()}
      />
      {filteredCases?.data?.length && <ListCase head={head} rows={filteredCases.data} />}
    </Grid>
  );
}

export default FilterCase;
