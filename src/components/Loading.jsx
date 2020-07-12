import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import React from "react";

const Loading = (props) => {
  return (
    <Grid container align="center" justify="center" {...props}>
      <CircularProgress/>
    </Grid>
  );
};

export default Loading;