import { connect } from 'react-redux';
import Orders from './Orders';

import { getOrders, toggleModal } from '../entities/order';

const mapStateToProps = state => {
  const {
    page,
    filter,
    sortCategory,
    sortOrder,
    pages,
    orders,
    showModal
  } = state.order;

  return {
    page,
    filter,
    sortCategory,
    sortOrder,
    pages,
    orders,
    showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetOrders: (page, sortCategory, sortOrder, filter) => {
      dispatch(getOrders(page, sortCategory, sortOrder, filter));
    },
    handleToggleModal: order => {
      dispatch(toggleModal(order));
    }
  };
};

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);
export default OrdersContainer;
