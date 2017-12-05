import { connect } from 'react-redux';
import Apparel from './Apparel';

import { getApparel, toggleModal } from '../entities/apparel';

const mapStateToProps = state => {
  const { apparels, page, openModal } = state.apparel;

  return {
    apparels,
    page,
    openModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparel: page => {
      dispatch(getApparel(page));
    },
    handleToggleModal: apparel => {
      dispatch(toggleModal(apparel));
    }
  };
};

const ApparelContainer = connect(mapStateToProps, mapDispatchToProps)(Apparel);
export default ApparelContainer;
