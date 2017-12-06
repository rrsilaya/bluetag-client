import { connect } from 'react-redux';
import Dashboard from './Dashboard';

import { getStatistics } from '../entities/statistics';

const mapStateToProps = state => {
  const { isGettingStatistics, statistics } = state.statistics;

  return {
    isGettingStatistics,
    statistics
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetStatistics: () => {
      dispatch(getStatistics());
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard
);
export default DashboardContainer;
