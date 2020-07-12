import MuiCard from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import {formatNumber} from "../utils/number";
import {H5, P2} from "./Texts";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 200,
    minHeight: 100,
    padding: 10,
    margin: 20,
    boxShadow: "#2b1876 0px 9px 30px 3px",
    backgroundColor: "#401da5",
    borderRadius: 10
  }
}));

function Card({title, value, titleProps = {}, valueProps = {}, ...props}) {
  const classes = useStyles(props);
  return (
    <MuiCard className={classes.container} {...props}>
      <P2 {...titleProps}>{title}</P2>
      <H5 nunito bold {...valueProps}>{formatNumber(value)}</H5>
    </MuiCard>
  );
}

export default Card;
