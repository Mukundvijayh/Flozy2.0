import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const Text = (props) => {
  const { className, StartIcon, EndIcon, onChange, onSearch, ...textProps } =
    props;

  let idleTimeout = null;

  const handleSearch = (val) => () => {
    onSearch(val);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    if (onSearch) {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(handleSearch(val), 1000);
    }
  };

  return (
    <TextField
      size="small"
      {...textProps}
      InputProps={{
        startAdornment: StartIcon && (
          <InputAdornment position="start">
            <StartIcon />
          </InputAdornment>
        ),
        endAdornment: EndIcon && (
          <InputAdornment position="end">
            <EndIcon />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
    />
  );
};

Text.defaultProps = {
  onChange: () => {},
};

export default Text;
