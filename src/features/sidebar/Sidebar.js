import React, { Component } from 'react';
import Nav from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import DashboardIcon from 'grommet/components/icons/base/Dashboard';
import CoatCheckIcon from 'grommet/components/icons/base/CoatCheck';
import CompareIcon from 'grommet/components/icons/base/Compare';
import DocumentTimeIcon from 'grommet/components/icons/base/DocumentTime';
import GroupIcon from 'grommet/components/icons/base/Group';

class Sidebar extends Component {
  render() {
    return (
      <Nav colorIndex="light-2" size="small">
        <Box flex="grow" justify="start">
          <br />
          <Menu primary>
            <Anchor
              label="Dashboard"
              href="#"
              icon={<DashboardIcon />}
              animateIcon={false}
            />
            <Anchor
              label="Apparel"
              href="#"
              icon={<CoatCheckIcon />}
              animateIcon={false}
            />
            <Anchor
              label="Stock"
              href="#"
              icon={<CompareIcon />}
              animateIcon={false}
            />
            {this.props.user === 'manager'
              ? [
                  <Anchor
                    label="Logs"
                    href="#"
                    icon={<DocumentTimeIcon />}
                    animateIcon={false}
                  />,
                  <Anchor
                    label="Employees"
                    href="#"
                    icon={<GroupIcon />}
                    animateIcon={false}
                  />
                ]
              : ''}
          </Menu>
        </Box>
      </Nav>
    );
  }
}

export default Sidebar;
