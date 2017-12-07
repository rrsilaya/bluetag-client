import { connect } from 'react-redux';
import AddOrder from './AddOrder';

import {
  toggleAddModal,
  addOrder,
  orderFormChange
} from '../../entities/order';
const mapStateToProps = state => {
  const { showAddModal, newOrder } = state.order;

  return { showAddModal, newOrder };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleAddModal: () => {
      dispatch(toggleAddModal());
    },
    handleAddOrder: company => {
      dispatch(addOrder(company));
    },
    handleOrderFormChange: (company, value) => {
      dispatch(orderFormChange(company, value));
    }
  };
};

const AddOrderContainer = connect(mapStateToProps, mapDispatchToProps)(
  AddOrder
);
export default AddOrderContainer;
