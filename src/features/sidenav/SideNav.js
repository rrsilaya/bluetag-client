import React from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

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
