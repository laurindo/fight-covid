import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {lastCases, totalCases, totalCasesByDate} from "../../utils/cases";
import {P2} from "../../components/Texts";
import Card from "../../components/Card";

const useStyles = makeStyles({
  container: {
    padding: "40px 0 0"
  }
});

function Cases({title, value, type}) {
  const classes = useStyles();
  let results = {};

  if (type === "rangeDate" || type === "country") {
    results = lastCases(value);
  } else if (type === "date") {
    results = totalCasesByDate(value);
  } else if (type === "all") {
    results = totalCases(value);
  }

  const cards = [{
    id: "confirmed",
    title: "Active",
    color: "primary1"
  }, {
    id: "deaths",
    title: "Deaths",
    color: "red"
  }, {
    id: "recovered",
    title: "Recovered",
    color: "blue"
  }];

  return (
    <Grid container align="center" justify="center" className={classes.container}>
      <Grid item xs={12}>
        <P2 noMargin color="primary1">{title}</P2>
      </Grid>
      {cards.map((card, i) => (
        <Card
          key={i}
          titleProps={{color: "white", noMargin: true, nunito: true}}
          valueProps={{color: card.color, noMargin: true}}
          value={results[card.id]}
          {...card}
        />
      ))}
    </Grid>
  );
}

export default Cases;
