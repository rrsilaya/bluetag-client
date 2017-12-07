import { connect } from 'react-redux';
import OrderSearch from './OrderSearch';

import {
  changeSortCategory,
  changeSortOrder,
  changeFilter,
  toggleAddModal
} from '../../entities/order';

const mapStateToProps = state => {
  const { page, sortCategory, sortOrder, filter, showAddModal } = state.order;

  return {
    page,
    sortCategory,
    sortOrder,
    filter,
    showAddModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeSortCategory: (page, sortCategory, sortOrder, filter) => {
      dispatch(changeSortCategory(page, sortCategory, sortOrder, filter));
    },
    handleChangeSortOrder: order => {
      dispatch(changeSortOrder(order));
    },
    handleChangeFilter: filter => {
      dispatch(changeFilter(filter));
    },
    handleToggleAddModal: () => {
      dispatch(toggleAddModal());
    }
  };
};

const OrderSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
  OrderSearch
);
export default OrderSearchContainer;
