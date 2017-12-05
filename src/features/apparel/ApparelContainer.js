import { connect } from 'react-redux';
import Apparel from './Apparel';

import { getApparel, getApparelByID } from '../entities/apparel';

const mapStateToProps = state => {
  const { apparels, pages, page } = state.apparel;

  return {
    apparels,
    pages,
    page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetApparel: page => {
      dispatch(getApparel(page));
    },
    handleGetApparelByID: id => {
      dispatch(getApparelByID(id));
    }
  };
};

const ApparelContainer = connect(mapStateToProps, mapDispatchToProps)(Apparel);
export default ApparelContainer;
