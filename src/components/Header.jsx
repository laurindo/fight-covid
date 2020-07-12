import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth from "@material-ui/core/withWidth";
import React from "react";
import {red} from "../styles/core/colors";
import {H5, P2} from "./Texts";
import Container from "./Container";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "#26c4cc"
  },
  link: {
    textDecoration: "none"
  },
  name: {
    color: red
  }
}));

function Header({children, ...props}) {
  const classes = useStyles(props);
  const isMobile = ["xs"].includes(props.width);
  const Title = isMobile ? P2 : H5;
  return (
    <Container padding={0} className={classes.container} justify={isMobile ? "center" : "space-between"}>
      <a href="/" className={classes.link}>
        <Title color="white" nunito bold>Fight <span className={classes.name}>COVID</span></Title>
      </a>
    </Container>
  );
}

export default withWidth()(Header);
