import React from "react";
import { Text } from "./Text";
import styled from "styled-components";
import { tokens } from "../../data/tokens";



const LightBackground = styled.div`
  padding: 1rem;
`;

const DarkBackground = styled.div`
  padding: 1rem;
  background: ${tokens.colors.blue.solid};
`;

export const Demo = () => {
  return (
    <div>    

    <h2>Text</h2>
    <LightBackground>
      <Text size="s">
          This is a title
      </Text>

      <hr />

      <Text size="m">
      This is a title
      </Text>
      <hr />

      <Text size="l">
          This is a title
      </Text>

      <hr />
      <Text size="xl">
      This is a title
      </Text>
    </LightBackground>
    <hr />

    <LightBackground>
      <Text size="s" importance="secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>

      <hr />

      <Text size="m" importance="secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
      <hr />

      <Text size="l" importance="secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
    </LightBackground>
    <hr />

    <DarkBackground>
      <Text size="s" inverse>
      This is a title
      </Text>
      <hr />

      <Text size="m" inverse>
      This is a title
      </Text>
      <hr />

      <Text size="l" inverse>
      This is a title
      </Text>
      <hr />

      <Text size="xl" inverse>
      This is a title
      </Text>
    </DarkBackground>

    <hr />

    <DarkBackground>
      <Text size="s" inverse importance="secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
      <hr />

      <Text size="m" inverse importance="secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
      <hr />

      <Text size="l" inverse importance="secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Text>
    </DarkBackground>
  </div>
   )

};

export default Demo;
