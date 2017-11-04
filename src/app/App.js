import React, { Component } from 'react';
import Grommet from 'grommet/components/App';
import {
  BrowserRouter,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Loader from '../features/auth/loader/Loader';
import Login from '../features/auth/login/LoginContainer';

import routes from './routes';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.handleGetSession();
  }

  render() {
    return (
      <BrowserRouter history={withRouter}>
        <Grommet>
          {this.props.isGettingSession ? (
            <Loader />
          ) : !this.props.user ? (
            <Switch>
              <Route exact path="/" component={Login} />
              <Redirect to="/" />
            </Switch>
          ) : (
            <h1>Inside App</h1>
          )}
        </Grommet>
      </BrowserRouter>
    );
  }
}

export default App;
