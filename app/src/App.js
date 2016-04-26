import React, { Component } from 'react';
import './App.scss';

import TopNav from './components/topnav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        // TODO results component
        // TODO footer
      </div>
    );
  }
}

export default App;
