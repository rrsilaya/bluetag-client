import React, { Component } from 'react';
import * as moment from 'moment';

import './style.css';

import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import OrderInfo from './components/OrderInfoContainer';

class Orders extends Component {
  componentDidMount() {
    this.props.handleGetOrders(this.props.page);
  }

  handleLoadMore = () => {
    this.props.handleGetOrders(this.props.page);
  };

  render() {
    const { page, pages, orders, showModal, handleToggleModal } = this.props;
    return (
      <div>
        <div className="orderTable">
          <h2>Orders</h2>
          {showModal && <OrderInfo />}
          <Table onMore={page === pages ? false : this.handleLoadMore}>
            <TableHeader
              labels={['Company', 'Order ID', 'Order Status', 'Timestamp']}
            />
            <tbody>
              {orders.map((order, i) => {
                return (
                  <TableRow
                    key={i}
                    className="order-item"
                    onClick={() => handleToggleModal(order.id)}>
                    <td>{order.company}</td>
                    <td>{order.id}</td>
                    <td>{order.status}</td>
                    <td>
                      {moment(order.timestamp).format('MMMM D YYYY, h:mm:ss A')}
                    </td>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Orders;
