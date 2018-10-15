import React from 'react';

import { withContext } from '../../context';

const ChildComponent = props => {
  const { context } = props;
  const { ola } = context;
  return <div>{ola}</div>;
};

export default withContext(ChildComponent);
