import React from "react";
import { Layout } from "./Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  hover: 1px dotted blue;
  height: 500px;
`;

export const Demo = () => {
  return (
    <div>
      <Wrapper>
        <Layout title="Hello World"> Hello World</Layout>
      </Wrapper>

      <Wrapper>
        <Layout title="Hello World" primary={["primary", "#"]}>
        Hello World
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
        >
          Hello World
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
        >
         Hello World
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            tittle: 'Hello',
            nature: 'resolving',
            description: 'hello'
          }}
        >
         Hello World
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Hello World"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            tittle: 'Hello',
            nature: 'error',
            description: 'hello'
          }}
        >
         Hello World
        </Layout>
      </Wrapper>
    </div>
  );
};

export default Demo;
