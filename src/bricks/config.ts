// import React from 'react';
import { ReactBricks } from 'react-bricks';
import Alert from './Alert';

const MyComponent = () => {
  return (
    <ReactBricks
      apiKey="my-api-key"
      projectId="my-project-id"
      bricks={{ Alert }}
    />
  );
};

export default MyComponent;
