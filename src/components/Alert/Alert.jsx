import React from "react";
import styled from "styled-components";
import { Alert as MuiAlert } from "@material-ui/lab";
import { CircularProgress } from "@material-ui/core";
import { Text } from "../Text";
import { tokens } from "../../data/tokens";

const SEVERITY_MAP = {
  error: "error",
  validation: "warning",
  resolving: "info",
};

const StyledAlert = styled(MuiAlert)`
  align-items: center;
  text-align: left;
`;

const DescriptionWrap = styled.div`
  padding-top: ${tokens.spacing.s};
`;

/**
 * @typedef {object} props
 * @property {'error' | 'validation' | 'resolving'} nature
 * @property {string} tittle
 * @property {string} [description]
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Alert = (props) => {
  const { nature = "validation", tittle, description } = props;
  const severity = SEVERITY_MAP[nature];
  const icon =
    nature === "resolving" ? (
      <CircularProgress size={20} thickness={6} />
    ) : undefined;

  return (
    <StyledAlert severity={severity} icon={icon}>
      <Text size={description ? "l" : "s"}>{tittle}</Text>
      {description && (
        <DescriptionWrap>
          <Text size="s">{description}</Text>
        </DescriptionWrap>
      )}
    </StyledAlert>
  );
};

export default Alert;
