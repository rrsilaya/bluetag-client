import { connect } from 'react-redux';
import OrderInfo from './OrderInfo';

import {
  deleteOrder,
  getOrder,
  editOrder,
  toggleModal
} from '../../entities/order';

const mapStateToProps = state => {
  const { order, isGettingOrder, isDeletingOrder } = state.order;

  return {
    order,
    isGettingOrder,
    isDeletingOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetOrder: orderId => {
      dispatch(getOrder(orderId));
    },
    handleEditOrder: (orderId, orderInfo) => {
      dispatch(editOrder(orderId, orderInfo));
    },
    handleDeleteOrder: orderId => {
      dispatch(deleteOrder(orderId));
    },
    handleToggleModal: () => {
      dispatch(toggleModal());
    }
  };
};

const OrderInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderInfo
);
export default OrderInfoContainer;
