import { connect } from 'react-redux';
import Apparel from './Apparel';

import { getApparel, toggleModal } from '../entities/apparel';

const mapStateToProps = state => {
  const {
    apparels,
    page,
    pages,
    infoModal,
    searchApparel,
    isGettingApparel
  } = state.apparel;

  return {
    apparels,
    page,
    pages,
    infoModal,
    searchApparel,
    isGettingApparel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparel: (page, search) => {
      dispatch(getApparel(page, search));
    },
    handleToggleModal: apparel => {
      dispatch(toggleModal(apparel));
    }
  };
};

const ApparelContainer = connect(mapStateToProps, mapDispatchToProps)(Apparel);
export default ApparelContainer;
