import { connect } from 'react-redux';
import Orders from './Orders';

import { getOrders, toggleModal } from '../entities/order';

const mapStateToProps = state => {
  const { page, pages, orders, showModal } = state.order;

  return {
    page,
    pages,
    orders,
    showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetOrders: page => {
      dispatch(getOrders(page));
    },
    handleToggleModal: order => {
      dispatch(toggleModal(order));
    }
  };
};

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);
export default OrdersContainer;
