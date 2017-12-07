import React from 'react';

import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

const ConfirmDelete = ({ toggleDelete, deleteItem }) => {
  return (
    <Layer>
      <Heading>Delete Item</Heading>
      <Label>Are you sure you want to delete this item?</Label>
      <Footer pad={{ vertical: 'medium' }} justify="end">
        <Button
          label="Delete"
          box
          pad="small"
          colorIndex="critical"
          onClick={deleteItem}
        />
        <Button
          label="Cancel"
          box
          pad="small"
          colorIndex="ok"
          onClick={toggleDelete}
        />
      </Footer>
    </Layer>
  );
};

export default ConfirmDelete;
