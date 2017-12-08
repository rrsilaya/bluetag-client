import { connect } from 'react-redux';
import Logs from './Logs';

import { getLogs } from '../entities/log';

const mapStateToProps = state => {
  const {
    logs,
    isGettingLogs,
    page,
    pages,
    sortCategory,
    sortOrder
  } = state.log;

  return {
    logs,
    isGettingLogs,
    page,
    pages,
    sortCategory,
    sortOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetLogs: (page, sortCategory, sortOrder) => {
      dispatch(getLogs(page, sortCategory, sortOrder));
    }
  };
};

const LogsContainer = connect(mapStateToProps, mapDispatchToProps)(Logs);
export default LogsContainer;
