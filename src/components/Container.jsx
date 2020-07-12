import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    padding: props => props.padding || 40,
    background: "linear-gradient(328deg, rgba(85,26,79,1) 0%, rgba(64,24,78,1) 27%, rgba(32,21,79,1) 77%, rgba(35,22,95,1) 82%, rgba(41,23,113,1) 88%, rgba(48,25,129,1) 95%, rgba(50,23,136,1) 100%)",
    [theme.breakpoints.down("xs")]: {
      padding: props => 10
    }
  }
}));

function Container({children, ...props}) {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.container} {...props}>
      {children}
    </Grid>
  );
}

export default Container;
