import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';

import Logo from '../Logo';
import '../style.css';

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <LoginForm
          onSubmit={this.props.handleLogin}
          logo={<Logo />}
          usernameType="text"
          errors={[this.props.loginError]}
        />
      </div>
    );
  }
}

export default Login;
