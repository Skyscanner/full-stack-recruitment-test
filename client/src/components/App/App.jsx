import React from 'react';
import BpkText from 'bpk-component-text';

import STYLES from './App.scss';
import Header from './../Header';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <Header />
    <main className={c('App__main')}>
      <BpkText tagName="p">Over to you...</BpkText>
    </main>
  </div>
);

export default App;
