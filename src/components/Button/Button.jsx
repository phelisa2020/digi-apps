import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Button as MuiButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const calcColor = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return tokens.colors.blue.solid;
  }

  if (inverse) {
    return tokens.highlight.white.solid;
  }

  if (importance === "secondary") {
    return tokens.colors.blue.solid;
  }

  return tokens.highlight.white.solid;
};

const calcBorder = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return `0 solid ${tokens.highlight.white.none}`;
  }

  if (inverse) {
    return `1px solid ${tokens.highlight.white.solid}`;
  }

  if (importance === "secondary") {
    return `1px solid ${tokens.colors.blue.solid}`;
  }

  return `0 solid ${tokens.highlight.white.none}`;
};

const calcBackground = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return tokens.highlight.white.solid;
  }

  if (inverse) {
    return tokens.highlight.white.none;
  }

  if (importance === "secondary") {
    return tokens.colors.blue.none;
  }

  return tokens.colors.blue.solid;
};

const calcHover = ({ importance, inverse }) => {
  if (importance === "primary" && inverse) {
    return tokens.highlight.white.stronger;
  }

  if (inverse) {
    return tokens.highlight.white.lighter;
  }

  if (importance === "secondary") {
    return tokens.colors.blue.lighter;
  }

  return tokens.colors.blue.stronger;
};

const calcActionProps = (action) => {
  if (action === true) {
    return { type: "submit" };
  }

  if (!action) {
    return { disabled: true, type: "button" };
  }

  if (typeof action !== "string")
    return { component: "button", onClick: action, type: "button" };

  return { component: Link, to: action, type: "button" };
};

const StyledButton = styled(MuiButton)`
  color: ${calcColor};
  border: ${calcBorder};
  background: ${calcBackground};
  width: ${({ full }) => (full ? "100%" : "auto")};

  &:hover {
    background: ${calcHover};
  }
`;

/**
 *
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {'primary' | 'secondary'} importance
 * @property {boolean} inverse
 * @property {boolean} full
 * @property {string | function} action
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Button = (props) => {
  const {
    children,
    importance = "secondary",
    inverse,
    full = false,
    action,
  } = props;
  const variant = importance === "primary" ? "contained" : "outlined";
  const actionProps = calcActionProps(action);

  return (
    <StyledButton
    inverse={inverse}
    importance={importance}
    children={children}
    {...actionProps}
    fullWidth={full}
    variant={variant}
    />
     
  );
};

export default Button;
