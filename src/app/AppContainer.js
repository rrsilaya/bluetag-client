import { connect } from 'react-redux';
import App from './App';

import { getSession, logout } from '../features/entities/auth';

const mapStateToProps = state => {
  const { isGettingSession, user } = state.auth;

  return {
    isGettingSession,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetSession: () => {
      dispatch(getSession());
    },
    handleLogout: () => {
      dispatch(logout());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
