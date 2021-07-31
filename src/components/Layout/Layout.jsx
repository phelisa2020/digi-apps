import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Button } from "../Button";
import { Text } from "../../components/Text";
import { Link } from "../Link";

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean} inverse
 * @property {[string, string | function]} [primary]
 * @property {[string, string | function]} [secondary]
 * @property {[string, string | function]} [extra]

 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

const COLORS = {
    white: `rgb(${tokens.colors.white})`,
    blue: `rgb(${tokens.colors.blue.solid})`,
    whiteStronger: `rgb(${tokens.colors.white}, ${tokens.opacity.stronger})`,
    blackStrong: `rgb(${tokens.colors.black}, ${tokens.opacity.strong})`,
}
const Base = styled.div`
  height: 100%;
  text-align: center;
  display:flex;
  flex-direction: column;
  padding-bottom: ${tokens.spacing.l};
  background-color: ${({ inverse }) =>
    inverse ? tokens.colors.blue.solid : tokens.highlight.white.solid};
`;

// const Base = styled.div`
//   height: 100%;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
//   background: ${({ inverse }) => inverse ? COLORS.blue : COLORS.white};
//   color: ${({ inverse }) => inverse ? COLORS.whiteStronger : COLORS.blackStrong};
// `;

const Header = styled.header``;
const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const Nested = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  padding: ${tokens.spacing.xs};
`;
const LinkWrap = styled.div`
  padding: ${tokens.spacing.m} ${tokens.spacing.xs} ${tokens.spacing.xs};
`;

export const Layout = (props) => {
  const { children, title, inverse, extra, primary, secondary } = props;
  return (
    <Base inverse={inverse}>
      <Header>
        <Text size="xl" component="h1">
          {title}
        </Text>
      </Header>
 
      <Content>
        <Nested>
          <div>{children}</div>
        </Nested>

        {secondary && (
          <ButtonWrap>
           
            <Button full inverse={inverse}>123</Button>
          </ButtonWrap>
        )}
        {primary && (
          <ButtonWrap>
            
            <Button inverse={inverse} full importance="primary">
              123
            </Button>
          </ButtonWrap>
        )}
        {extra && (
          <LinkWrap>
           
            <Link inverse={inverse} >123</Link>
          </LinkWrap>
        )}
      </Content>
    </Base>
  );
};

export default Layout;
