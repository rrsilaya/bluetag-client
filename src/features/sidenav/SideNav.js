import React from 'react';
import Sidebar from 'grommet/components/Sidebar';

const SideNav = props => {
  return (
    <Sidebar fixed>
      <Header>
        <Title>Sidebar</Title>
      </Header>
    </Sidebar>
  );
};

export default SideNav;
