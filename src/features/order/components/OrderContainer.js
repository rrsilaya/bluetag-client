import { connect } from 'react-redux';
import Order from './Order';

import { getOrder, editOrder } from '../../entities/order';

const mapStateToProps = state => {
  const { order, isGettingOrder } = state.order;

  return {
    order,
    isGettingOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetOrder: id => {
      dispatch(getOrder(id));
    },
    handleEditOrder: (id, update) => {
      dispatch(editOrder(id, update));
    }
  };
};

const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
export default OrderContainer;
