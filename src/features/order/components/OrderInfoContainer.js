import { connect } from 'react-redux';
import OrderInfo from './OrderInfo';

import {
  deleteOrder,
  getOrder,
  editOrder,
  toggleModal,
  toggleDeleteModal,
  formChange
} from '../../entities/order';

const mapStateToProps = state => {
  const {
    order,
    showDeleteModal,
    isGettingOrder,
    isDeletingOrder,
    isEditingOrder
  } = state.order;

  return {
    order,
    showDeleteModal,
    isGettingOrder,
    isDeletingOrder,
    isEditingOrder
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
    handleToggleModal: orderId => {
      dispatch(toggleModal(orderId));
    },
    handleToggleDeleteModal: () => {
      dispatch(toggleDeleteModal());
    },
    handleFormChange: (name, option) => {
      dispatch(formChange(name, option));
    }
  };
};

const OrderInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderInfo
);
export default OrderInfoContainer;
