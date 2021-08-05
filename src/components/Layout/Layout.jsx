import React from "react";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { Button } from "../Button";
import { Link } from "../Link";
import { Alert } from "../Alert";
import { useHistory } from "react-router-dom";

const COLORS = {
  white: `rgb(${tokens.colors.white})`,
  turquoise: `rgb(${tokens.colors.turquoise})`,
  whiteStronger: `rgb(${tokens.colors.white}) ${tokens.opacity.stronger})`,
  blackStrong: `rgb(${tokens.colors.black}) rgb(${tokens.opacity.strong})`,
};

const Base = styled.div`
  text-align: center;
  padding: ${tokens.spacing.xl} ${tokens.spacing.m} ${tokens.spacing.l};
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ inverse }) =>
    inverse ? COLORS.whiteStronger : COLORS.blackStrong};
  width: 100%;
  max-width: 25rem;
  max-height: 45rem;
  padding-bottom: ${tokens.spacing.xl};
`;

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

const NestedChildren = styled.div`
  width: 100%;
  padding: ${tokens.spacing.l} 0;
`;

const BaseWrap = styled.div`
  background: ${({ inverse }) => (inverse ? COLORS.turquoise : COLORS.white)};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
`;

const AlertWrap = styled.div`
  padding-bottom: ${tokens.spacing.m};
`;

/**
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {string} title
 * @property {boolean} form
 * @property {boolean} inverse
 * @property {[string, string | function]} [primary]
 * @property {[string, string | function]} [secondary]
 * @property {[string, string | function]} [extra]
 * @property {[tittle: string, description?: string, nature: 'error' | 'validation' | 'resolving']}
 */

/**
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Layout = (props) => {
  const { children, title, inverse, extra, primary, secondary, alert, form } =
    props;

  const history = useHistory();

  const handleForm = (event) => {
    event.preventDefault();

    if (typeof primary[1] === "string") {
      return history.to(primary[1]);
    }
    primary[1]();
  };

  return (
    <BaseWrap inverse={inverse}>
      <Base>
        <header>
          <Text size="xl" component="h1" inverse={inverse}>
            {title}
          </Text>
        </header>

        <main>
          <Content as={form ? "form" : "div"} action={handleForm}>
            <Nested>
              <NestedChildren>{children}</NestedChildren>
            </Nested>

            {alert && (
              <AlertWrap>
                <Alert {...alert} />
              </AlertWrap>
            )}

            {secondary && (
              <ButtonWrap>
                <Button action={secondary[1]} inverse={inverse} full>
                  {secondary[0]}
                </Button>
              </ButtonWrap>
            )}

            {primary && (
              <ButtonWrap>
                <Button
                  action={primary[1]}
                  inverse={inverse}
                  full
                  importance="primary"
                >
                  {primary[0]}
                </Button>
              </ButtonWrap>
            )}

            {extra && (
              <LinkWrap>
                <Link action={extra[1]} inverse={inverse}>
                  {extra[0]}
                </Link>
              </LinkWrap>
            )}
          </Content>
        </main>
      </Base>
    </BaseWrap>
  );
};

export default Layout;
