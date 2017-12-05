import { connect } from 'react-redux';
import ApparelInfo from './ApparelInfo';

import { getApparelByID } from '../entities/apparel';

const mapStateToProps = state => {
  const { apparel } = state.apparel;

  return {
    apparel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparelByID: id => {
      dispatch(getApparelByID(id));
    }
  };
};

const ApparelInfoContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelInfo
);
export default ApparelInfoContainer;
