import React, { Component } from 'react';

import './style.css';

import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';

import Order from './components/OrderContainer';

class Orders extends Component {
  componentDidMount() {
    this.props.handleGetOrders(this.props.page);
  }

  render() {
    const { orders, showModal, handleToggleModal } = this.props;
    return (
      <div className="orderTable">
        <Table responsive>
          <TableHeader
            labels={['Company', 'Order ID', 'Order Status', 'Timestamp']}
          />
          <tbody>
            {orders.map((order, i) => (
              <Order
                id={order.id}
                {...order}
                onHandleClick={this.handleClick}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Orders;
