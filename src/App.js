import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Aside/>
      </div>
    );
  }
}

export default App;
