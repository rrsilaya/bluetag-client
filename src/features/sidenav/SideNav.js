import React from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const SideNav = props => {
  return (
    <Sidebar fixed colorIndex="neutral-1">
      <Header pad="medium" justify="between">
        <Title>Sidebar</Title>
      </Header>
      <Box flex="grow" justify="start">
        <Menu primary={true}>
          <Anchor>Link1</Anchor>
          <Anchor>Link2</Anchor>
          <Anchor>Link3</Anchor>
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SideNav;
