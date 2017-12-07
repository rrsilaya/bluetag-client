import { connect } from 'react-redux';
import StockInfo from './StockInfo';

import {
  changeQuantity,
  toggleAddStock,
  changeStockInfo,
  addStock,
  confirmDelete,
  deleteStock
} from '../../../entities/stock';

const mapStateToProps = state => {
  const { activeApparel } = state.apparel;
  const { stocks, qty, addStock, stockInfo, confirmDelete } = state.stock;

  return {
    activeApparel,
    stocks,
    qty,
    addStock,
    stockInfo,
    confirmDelete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeQuantity: value => {
      dispatch(changeQuantity(value));
    },
    handleToggleAddStock: () => {
      dispatch(toggleAddStock());
    },
    handleChangeStockInfo: (name, value) => {
      dispatch(changeStockInfo(name, value));
    },
    handleAddStock: stock => {
      dispatch(addStock(stock));
    },
    handleConfirmDelete: () => {
      dispatch(confirmDelete());
    },
    handleDeleteStock: id => {
      dispatch(deleteStock(id));
    }
  };
};

const StockInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  StockInfo
);
export default StockInfoContainer;
