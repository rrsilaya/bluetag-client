import { connect } from 'react-redux';
import ApparelInfo from './ApparelInfo';

import { getApparelByID, toggleModal } from '../entities/apparel';

const mapStateToProps = state => {
  const { apparel, activeApparel } = state.apparel;

  return {
    apparel,
    activeApparel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparelByID: id => {
      dispatch(getApparelByID(id));
    },
    toggleModal: () => {
      dispatch(toggleModal());
    }
  };
};

const ApparelInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelInfo
);
export default ApparelInfoContainer;
