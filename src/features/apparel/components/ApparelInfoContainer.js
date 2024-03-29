import { connect } from 'react-redux';
import ApparelInfo from './ApparelInfo';

import {
  getApparelByID,
  toggleModal,
  changeInfo,
  editApparel,
  deleteApparel,
  confirmDelete
} from '../../entities/apparel';

import { getDiscounts } from '../../entities/discount';
import { getStocks } from '../../entities/stock';
import { getSales } from '../../entities/sale';

const mapStateToProps = state => {
  const { apparel, activeApparel, apparelInfo, confirmDelete } = state.apparel;

  return {
    apparel,
    activeApparel,
    apparelInfo,
    confirmDelete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparelByID: id => {
      dispatch(getApparelByID(id));
    },
    toggleModal: () => {
      dispatch(toggleModal());
    },
    handleChangeInfo: (name, value) => {
      dispatch(changeInfo(name, value));
    },
    handleEditApparel: (id, apparelInfo) => {
      dispatch(editApparel(id, apparelInfo));
    },
    handleConfirmDelete: () => {
      dispatch(confirmDelete());
    },
    handleDeleteApparel: id => {
      dispatch(deleteApparel(id));
    },
    handleGetDiscounts: apparel => {
      dispatch(getDiscounts(apparel));
    },
    handleGetStocks: apparel => {
      dispatch(getStocks(apparel));
    },
    handleGetSales: apparel => {
      dispatch(getSales(apparel));
    }
  };
};

const ApparelInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelInfo
);
export default ApparelInfoContainer;
