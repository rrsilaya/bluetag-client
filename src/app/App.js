import React, { Component } from 'react';
import Grommet from 'grommet/components/App';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Loader from '../features/auth/loader/Loader';
import Login from '../features/auth/login/LoginContainer';
import HeaderNav from '../features/headerNav/HeaderNav';
import Sidebar from '../features/sidebar/Sidebar';

import routes from './routes';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.handleGetSession();
  }

  render() {
    return (
      <Router history={withRouter}>
        <Grommet centered={false}>
          {this.props.isGettingSession ? (
            <Loader />
          ) : !this.props.user ? (
            <Switch>
              <Route exact path="/" component={Login} />
              <Redirect to="/" />
            </Switch>
          ) : (
            <div>
              <HeaderNav
                user={this.props.user.username}
                logout={this.props.handleLogout}
              />
              <Split
                className="container"
                showOnResponsive="priority"
                flex="right"
                fixed>
                <Sidebar user={this.props.user.type} />
                <Box pad="small" className="page">
                  <Switch>
                    {routes.map(
                      (route, i) =>
                        route.type === 'route' ? (
                          <Route {...route} key={i} />
                        ) : (
                          <Redirect {...route} key={i} />
                        )
                    )}
                  </Switch>
                </Box>
              </Split>
            </div>
          )}
        </Grommet>
      </Router>
    );
  }
}

export default App;
