import React, { Component } from 'react';

import './App.css';

import Split from 'grommet/components/Split';
import Main from 'grommet/components/App';

import SideNav from '../features/sidenav/SideNav';

class App extends Component {
  render() {
    return (
      <Split showOnResponsive="both" flex="right">
        <SideNav />
        <Main>Hello World</Main>
      </Split>
    );
  }
}

export default App;
