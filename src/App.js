import React, { PureComponent } from 'react';
import CounterClass from './components/CounterClass';
import CounterFunction from './hooks/CounterFunction';

const App = () => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <CounterClass />
      <CounterFunction counter="0" />
  </div>
);

export default App;
