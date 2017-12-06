import React, { Component } from 'react';

import TableRow from 'grommet/components/TableRow';

class Order extends Component {
  componentDidMount() {
    this.props.handleGetOrder(this.props.id);
  }

  render() {
    return (
      <TableRow onClick={this.props.handleClick}>
        <td>{this.props.company}</td>
        <td>{this.props.id}</td>
        <td>{this.props.status}</td>
        <td>{this.props.timestamp}</td>
      </TableRow>
    );
  }
}

export default Order;
