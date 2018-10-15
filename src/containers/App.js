import React from 'react';

import { ContextProvider } from '../context';

import ChildComponent from '../components/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          dfbdfgh
          <ChildComponent />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
