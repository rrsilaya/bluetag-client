import { connect } from 'react-redux';
import Logs from './Logs';

import { getLogs } from '../entities/log';

const mapStateToProps = state => {
  const { logs, isGettingLogs, page, pages } = state.log;

  return {
    logs,
    isGettingLogs,
    page,
    pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetLogs: page => {
      dispatch(getLogs(page));
    }
  };
};

const LogsContainer = connect(mapStateToProps, mapDispatchToProps)(Logs);
export default LogsContainer;
