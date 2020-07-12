import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FilterCase from "../containers/cases/FilterCase";
import Cases from "../containers/cases/Cases";
import {useFetch} from "../services/useFetch";
import {API} from "../services/API";
import Loading from "../components/Loading";
import AnimatedArea from "../components/AnimatedArea";
import {H3, P2} from "../components/Texts";

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.down("md")]: {
    covid: {
      width: "50%"
    }
  },
  [theme.breakpoints.down("xs")]: {
    covid: {
      width: "80%"
    }
  }
}));

function HomePage(props) {
  const classes = useStyles();
  const allCases = useFetch(API.all());

  return (
    <Grid container>
      <Grid item md={12} lg={8}>
        <Grid container align="center" justify="center">
          <H3 nunito capitalize noMargin color="white">let's help recover the earth, starts from us</H3>
          <P2 color="primary1">The outbreak of the coronavirus issue or called Covid-19 makes the Earth grieve.</P2>
        </Grid>
        {allCases.data ? <Cases title="All Cases" value={allCases.data} type="all"/> : <Loading/>}
      </Grid>
      <Grid item md={12} lg={4}>
        <AnimatedArea justify="center" align="center">
          <img src="https://res.cloudinary.com/luneswallet/image/upload/v1594393884/react-examples/virus.svg" alt="covid" className={classes.covid}/>
        </AnimatedArea>
      </Grid>
      <FilterCase {...props}/>
    </Grid>
  );
}

export default HomePage;
