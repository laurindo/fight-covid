const primary0 = "#5d121d";
const primary1 = "#f7c35a";
const primary2 = "#FFCB71";
const primary3 = "#FFEFD2";
const primary4 = "#FFF8EC";
const black = "#08021e";
const grey0 = "#9485aa";
const grey1 = "#c19ff3";
const grey2 = "#d0c2f5";
const grey3 = "#DFDFDF";
const grey4 = "#F7F7F7";
const white = "#e7ebf2";
const red = "#f03855";
const blue = "#38b6f6";
const green = "#3AC281";
const transparent = "transparent";
//specific
const favorite = "#E42D1F";
const parrotGreen = "#CDDC39";
//special color
const dividerColor = "#F2F2F2";
const hoverColor = "#FFFBF5";

const colorNames = ["primary0", "primary1", "primary2", "primary3", "primary4", "black", "grey0", "grey1", "grey2", "grey3", "grey4", "white", "red", "blue", "green", "parrotGreen", "flexitarian", "dividerColor", "hoverColor", "transparent"];
const colors = {
  parrotGreen,
  green,
  blue,
  red,
  black,
  white,
  primary0,
  primary1,
  primary2,
  primary3,
  primary4,
  grey0,
  grey1,
  grey2,
  grey3,
  grey4,
  dividerColor,
  hoverColor,
  transparent
};

const getColors = props => colorNames.reduce((r1, c) => ({
  [c]: props.reduce((r2, p) => ({[p]: colors[c], ...r2}), {}), ...r1
}), {});

const themeColors = getColors(["color"]);

export {
  primary0,
  primary1,
  primary2,
  primary3,
  primary4,
  black,
  red,
  parrotGreen,
  green,
  blue,
  grey0,
  grey1,
  grey2,
  grey3,
  grey4,
  white,
  transparent,
  getColors,
  colorNames,
  colors,
  themeColors,
  favorite,
  dividerColor,
  hoverColor
};