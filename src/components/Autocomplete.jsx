import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField/TextField";
import MuiAutocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import React from "react";
import {countryToFlag} from "../utils/common";
import {white} from "../styles/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: white,
    borderRadius: 20,
    "&& .MuiOutlinedInput-notchedOutline": {
      border: 0
    },
    "&& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: white,
      transform: "translate(14px, -25px) scale(0.75)"
    },
    "&& .MuiFormLabel-root.Mui-focused": {
      color: white,
      transform: "translate(14px, -25px) scale(0.75)!important"
    },
  },
  input: {
    width: "100%",
    maxWidth: "400px"
  }
}));

function Autocomplete(props) {
  const classes = useStyles(props);
  return (
    <MuiAutocomplete
      id="combo-box-demo"
      options={props.value}
      getOptionLabel={(option) => option.Country}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.ISO2)}&nbsp;</span>
          <span>{option.Country}</span>
        </React.Fragment>
      )}
      className={classes.input}
      renderInput={(params) => (
        <TextField
          {...params}
          classes={{root: classes.root, input: classes.input}}
          label={props.label}
          variant="outlined"
        />
      )}
      onChange={props.onChange}
    />
  );
}

export default Autocomplete;
