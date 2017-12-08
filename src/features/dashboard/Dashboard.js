import React, { Component } from 'react';
import Graph from './components/Graph';

import './style.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.handleGetStatistics();
  }

  render() {
    return (
      <div>
        <Graph statistics={this.props.statistics} />
      </div>
    );
  }
}

export default Dashboard;
