import Typography from "@material-ui/core/Typography";
import React from "react";
import cls from "classnames";
import styles from "../styles/core/text";

function Text(props) {
  const {
    roboto,
    nunito,
    uppercase,
    capitalize,
    nocase,
    light,
    regular,
    bold,
    small,
    italic,
    children,
    className,
    grey,
    color,
    ...forwardProps
  } = props;
  const classes = styles(props);
  const textClasses = cls({
    [classes.root]: true,
    [classes.nunito]: nunito,
    [classes.roboto]: roboto,
    [classes.uppercase]: uppercase,
    [classes.capitalize]: capitalize,
    [classes.nocase]: nocase,
    [classes.italic]: italic,
    [classes.light]: light,
    [classes.regular]: regular,
    [classes.bold]: bold,
    [classes.small]: small,
    [classes[grey]]: grey,
    [classes[color]]: color,
    [className]: className
  });

  return (
    <Typography
      classes={{
        h1: cls(classes.h1, textClasses),
        h2: cls(classes.h2, textClasses),
        h3: cls(classes.h3, textClasses),
        h4: cls(classes.h4, textClasses),
        h5: cls(classes.h5, textClasses),
        h6: cls(classes.h6, textClasses),
        subtitle1: cls(classes.subtitle1, textClasses),
        subtitle2: cls(classes.subtitle2, textClasses),
        body1: cls(classes.body1, textClasses),
        body2: cls(classes.body2, textClasses),
        caption: cls(classes.caption, textClasses)
      }}
      {...forwardProps}
    >
      {children}
    </Typography>
  );
}

export default Text;
