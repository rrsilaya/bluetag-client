import { connect } from 'react-redux';
import Login from './Login';

import { login } from '../../entities/auth';

const mapStateToProps = state => {
  const { loginError } = state.auth;

  return {
    loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: credentials => {
      dispatch(login(credentials));
    }
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
