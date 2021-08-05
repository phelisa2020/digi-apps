import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const StyledTextField = styled(TextField)`
  & .MuiFormLabel-root.Mui-focused {
    color: rgb(${tokens.colors.blue.solid});
  }
  & .MuiInputBase-root::after {
    border-bottom-color: rgb(${tokens.colors.blue.solid});
  }
`;

/**
 *
 * @typedef {*} props
 * @property {string} label
 * @property { string } value
 * @property {'text' | 'password' | 'email'} accepts
 * @property {(value: string) => void} onChange
 */

 export const Input = (props) => {
  const { accepts, label, onChange, value } = props;

  const handleChange = (event) => onChange(event.target.value);

  return (
    <StyledTextField
      value={value}
      label={label}
      disabled={!onChange}
      onChange={handleChange}
      fullWidth
      inputProps={{ type: accepts }}
      variant="filled"
    />
  );
};

export default Input;
