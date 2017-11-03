import React, { Component } from 'react';

import Main from 'grommet/components/App';
import Login from '../features/login/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Main>
        <Login />
      </Main>
    );
  }
}

export default App;
