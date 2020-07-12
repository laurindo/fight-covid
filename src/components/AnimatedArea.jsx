import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import cls from "classnames";

const useStyles = makeStyles((theme) => ({
  animation: {
    webkitAnimationDuration: "2.5s",
    animationDuration: "2.5s",
    webkitAnimationFillMode: "both",
    animationFillMode: "both",
    webkitAnimationTimingFunction: "linear",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    webkitAnimationIterationCount: "infinite"
  },
  bounce: {
    webkitAnimationName: "$bounce",
    animationName: "$bounce"
  },
  "@-webkit-keyframes bounce": {
    "0%, 100%": {
      webkitTransform: "translateY(0)"
    },
    "50%": {
      webkitTransform: "translateY(-25px), scale(1.01)",
    }
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)"
    },
    "50%": {
      transform: "translateY(-25px) scale(1.03)"
    }
  }
}));

function AnimatedArea({children, ...props}) {
  const classes = useStyles(props);
  return (
    <Grid container className={cls(classes.animation, classes.bounce)} {...props}>
      {children}
    </Grid>
  );
}

export default AnimatedArea;
