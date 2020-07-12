import {grey} from "@material-ui/core/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {black, themeColors} from "./colors";

const nunito = {
  fontFamily: "'Nunito', 'Arial', sans-serif"
};

const roboto = {
  fontFamily: "'Roboto', 'Arial', sans-serif"
};

const uppercase = {
  textTransform: "uppercase"
};

const title1 = {
  ...nunito,
  fontWeight: "700",
  margin: "20px auto"
};

const title2 = {
  ...roboto,
  fontWeight: "500",
  margin: "10px 0"
};

const subtitle = {
  ...title1,
  margin: "10px 0"
};

const body = {
  ...roboto,
  margin: "0 0 10px"
};

const style = makeStyles({
  root: {
    lineHeight: "1.5em",
    color: black
  },
  h1: {
    ...title1,
    fontSize: "4.8rem"
  },
  h2: {
    ...title1,
    fontSize: "3.6rem"
  },
  h3: {
    ...title2,
    fontSize: "3rem"
  },
  h4: {
    ...title2,
    fontSize: "2.4rem"
  },
  h5: {
    ...title2,
    fontSize: "2rem"
  },
  h6: {
    ...title2,
    fontSize: "1.6rem"
  },
  subtitle1: {
    ...subtitle,
    fontSize: "3rem"
  },
  subtitle2: {
    ...subtitle,
    fontSize: "2rem"
  },
  body1: {
    ...body,
    fontSize: "1.8rem"
  },
  body2: {
    ...body,
    fontSize: "1.4rem"
  },
  caption: {
    ...body,
    fontSize: "1.2rem"
  },
  noMargin: {margin: 0},
  nocase: {textTransform: "lowercase"},
  italic: {fontStyle: "italic"},
  light: {fontWeight: "300"},
  bold: {fontWeight: "700"},
  regular: {fontWeight: "400"},
  capitalize: {textTransform: "capitalize"},
  ...themeColors,
  uppercase,
  nunito,
  roboto
});

Object.keys(grey).map(k => style[k] = {color: `${grey[k]} !important`});

export default style;