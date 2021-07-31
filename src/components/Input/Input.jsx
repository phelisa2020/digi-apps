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
 * @property {'text' | 'password' | 'email'} accepts
 * @property {(value: string) => void} onChange
 */

export const Input = (props) => {
  const { accepts } = props;
  const handleChange = (e) => onchange(e.target.value);

  return (
    <StyledTextField
      {...props}
      onChange={handleChange}
      fullWidth
      type={accepts}
      variant="filled"
    />
  );
};

export default Input;
