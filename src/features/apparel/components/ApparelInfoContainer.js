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

import { getStocks } from '../../entities/stock';

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
    handleGetStocks: apparel => {
      dispatch(getStocks(apparel));
    }
  };
};

const ApparelInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelInfo
);
export default ApparelInfoContainer;
