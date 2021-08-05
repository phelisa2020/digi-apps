import React from "react";
import { Alert } from "./Alert";

export const Demo = () => {
  return (
    <div>
      <Alert tittle="Hello World!" />
      <Alert tittle="Hello World!" nature="validation" />
      <Alert tittle="Hello World!" nature="error" />
      <Alert tittle="Hello World!" nature="resolving" />

      <Alert
        tittle="Hello World!"
        description="This is a descprition........."
      />
      <Alert
        tittle="Hello World!"
        nature="validation"
        description="This is a descprition........."
      />
      <Alert
        tittle="Hello World!"
        nature="error"
        description="This is a descprition........."
      />
      <Alert
        tittle="Hello World!"
        nature="resolving"
        description="This is a descprition........."
      />
    </div>
  );
};

export default Demo;
