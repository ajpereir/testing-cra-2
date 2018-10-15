import React from 'react';

const AppContext = React.createContext();

/**
 * Context State Provider
 */
export class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ola: 'sadfasdf',
    };
  }

  render() {
    const state = { ...this.state };
    const { children } = this.props;

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
  }
}

/**
 * Context State Consumer
 */
export function withContext(Component) {
  return function ComponentWithContext(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
}
