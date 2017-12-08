import React, { Component } from 'react';

import './style.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.handleGetStatistics();
  }

  render() {
    return <div />;
  }
}

export default Dashboard;
