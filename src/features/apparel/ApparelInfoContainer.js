import { connect } from 'react-redux';
import ApparelInfo from './ApparelInfo';

import {
  getApparelByID,
  toggleModal,
  changeInfo,
  editApparel,
  deleteApparel
} from '../entities/apparel';

const mapStateToProps = state => {
  const { apparel, activeApparel, apparelInfo } = state.apparel;

  return {
    apparel,
    activeApparel,
    apparelInfo
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
    handleDeleteApparel: id => {
      dispatch(deleteApparel(id));
    }
  };
};

const ApparelInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelInfo
);
export default ApparelInfoContainer;
