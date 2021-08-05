import React from "react";
import { Text } from "./Text";
import styled from "styled-components";
import { tokens } from "../../data/tokens";

const DarkBg = styled.div`
  width: 100%;
  background: rgb(${tokens.colors.blue});
`;

export const Demo = () => {
  return (
    <div>
      <Text inverse size="s">
      Hello World
      </Text>
      <Text inverse size="m">
      Hello World
      </Text>
      <Text inverse size="l">
      Hello World
      </Text>
      <Text inverse size="xl">
      Hello World
      </Text>

      <Text inverse size="s">
      Hello World
      </Text>
      <Text inverse size="m">
      Hello World
      </Text>
      <Text inverse size="l">
      Hello World
      </Text>

      <DarkBg>
        <Text inverse size="s">
        Hello World
        </Text>
        <Text inverse size="m">
        Hello World
        </Text>
        <Text inverse size="l">
        Hello World
        </Text>
        <Text inverse size="xl">
        Hello World
        </Text>

        <Text inverse size="s">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
          eget justo nec bibendum. Donec commodo eu neque vel pharetra. Nunc
        
        </Text>

        <Text inverse size="m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
          eget justo nec bibendum. Donec commodo eu neque vel pharetra. Nunc
         
        </Text>

        <Text inverse size="l">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
          eget justo nec bibendum. Donec commodo eu neque vel pharetra. Nunc
         
        </Text>
      </DarkBg>
    </div>
  );
};

export default Demo;
