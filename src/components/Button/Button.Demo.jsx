import React from "react";
import { Button } from "./Button";
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
      <LightBackground>
        <div>
          <Button importance="primary">Hello World!</Button>
          </div>
          <div>
          <Button importance="secondary">Hello World!</Button>
          </div>
          <Button importance="secondary" full>
            Hello World!
          </Button>
        </LightBackground>

        <DarkBackground>
          <div>
          <Button importance="primary" inverse>
            Hello World!
          </Button>
          </div>
          <div>
          <Button importance="secondary" inverse>
            Hello World!
          </Button>
          </div>
          <Button inverse full>
            Hello World!
          </Button>

        </DarkBackground>
    </div>
  );
};

export default Demo;


       