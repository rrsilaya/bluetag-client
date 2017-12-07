import { connect } from 'react-redux';
import Sale from './Sale';

import {
  toggleAdd,
  changeInfo,
  addSale,
  confirmDelete,
  deleteSale
} from '../../../entities/sale';

const mapStateToProps = state => {
  const { activeApparel } = state.apparel;
  const { sales, addSale, salesInfo, confirmDelete } = state.sale;

  return {
    activeApparel,
    sales,
    addSale,
    salesInfo,
    confirmDelete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleAdd: () => {
      dispatch(toggleAdd());
    },
    handleChangeSaleInfo: (name, value) => {
      dispatch(changeInfo(name, value));
    },
    handleAddSale: (apparel, sale) => {
      dispatch(addSale(apparel, sale));
    },
    handleConfirmDelete: () => {
      dispatch(confirmDelete());
    },
    handleDeleteSale: id => {
      dispatch(deleteSale(id));
    }
  };
};

const SaleContainer = connect(mapStateToProps, mapDispatchToProps)(Sale);
export default SaleContainer;
