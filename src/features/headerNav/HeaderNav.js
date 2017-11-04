import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import LogoutIcon from 'grommet/components/icons/base/Logout';

import './style.css';
import logo from '../../stylesheets/logo/bt_inverted.svg';

class HeaderNav extends Component {
  render() {
    return (
      <Header className="header" colorIndex="brand" fixed>
        <img src={logo} alt="" height="32px" />
        <Box flex justify="end" direction="row">
          <Anchor
            icon={<LogoutIcon colorIndex="light-1" />}
            label={this.props.user}
            reverse
            animateIcon={false}
            onClick={this.props.logout}
          />
        </Box>
      </Header>
    );
  }
}

export default HeaderNav;
