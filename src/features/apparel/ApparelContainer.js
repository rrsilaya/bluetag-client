import { connect } from 'react-redux';
import Apparel from './Apparel';

import { getApparel } from '../entities/apparel';

const mapStateToProps = state => {
  const { apparels, page } = state.apparel;

  return {
    apparels,
    page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparel: page => {
      dispatch(getApparel(page));
    }
  };
};

const ApparelContainer = connect(mapStateToProps, mapDispatchToProps)(Apparel);
export default ApparelContainer;
