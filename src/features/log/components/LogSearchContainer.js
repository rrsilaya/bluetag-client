import { connect } from 'react-redux';
import LogSearch from './LogSearch';

import { changeCategory, sortLogs } from '../../entities/log';

const mapStateToProps = state => {
  const { page, sortCategory, sortOrder } = state.log;

  return { page, sortCategory, sortOrder };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeCategory: (page, sortCategory, sortOrder) => {
      dispatch(changeCategory(page, sortCategory, sortOrder));
    },
    handleSortLogs: (page, sortCategory, sortOrder) => {
      dispatch(sortLogs(page, sortCategory, sortOrder));
    }
  };
};

const LogSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
  LogSearch
);
export default LogSearchContainer;
