import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

const ConfirmDelete = ({ toggleDelete, deleteApparel }) => {
  return (
    <Layer>
      <Heading>Delete Apparel</Heading>
      <Label>Are you sure you want to delete this apparel?</Label>
      <Footer pad={{ vertical: 'medium' }} justify="end">
        <Button
          label="Delete"
          box
          pad="small"
          colorIndex="critical"
          onClick={deleteApparel}
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

class ApparelInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDelete: false
    };
  }

  componentDidMount() {
    this.props.handleGetApparelByID(this.props.activeApparel);
  }

  handleToggleModal = () => {
    this.props.toggleModal();
  };

  handleConfirmDelete = () => {
    this.setState({ confirmDelete: !this.state.confirmDelete });
  };

  handleChangeInfo = e => {
    this.props.handleChangeInfo(e.target.name, e.target.value);
  };

  handleEditApparel = e => {
    e.preventDefault();
    this.props.handleEditApparel(
      this.props.activeApparel,
      this.props.apparelInfo
    );
    this.props.toggleModal();
  };

  handleDeleteApparel = () => {
    this.props.handleDeleteApparel(this.props.activeApparel);
    this.props.toggleModal();
  };

  render() {
    const { apparel, apparelInfo } = this.props;

    return (
      <Layer closer onClose={this.handleToggleModal}>
        {this.state.confirmDelete && (
          <ConfirmDelete
            deleteApparel={this.handleDeleteApparel}
            toggleDelete={this.handleConfirmDelete}
          />
        )}
        <Form onSubmit={this.handleEditApparel}>
          <Heading>Apparel Information</Heading>
          <FormField label="ID">
            <TextInput name="id" value={apparel.id} />
          </FormField>
          <FormField label="Brand">
            <TextInput
              name="brand"
              value={apparelInfo.brand}
              onDOMChange={this.handleChangeInfo}
            />
          </FormField>
          <FormField label="Type">
            <TextInput
              name="type"
              value={apparelInfo.type}
              onDOMChange={this.handleChangeInfo}
            />
          </FormField>
          <FormField label="Size">
            <TextInput
              name="size"
              value={apparelInfo.size}
              onDOMChange={this.handleChangeInfo}
            />
          </FormField>
          <FormField label="Color">
            <TextInput
              name="color"
              value={apparelInfo.color}
              onDOMChange={this.handleChangeInfo}
            />
          </FormField>
          <FormField label="Quantity">
            <TextInput name="quantity" value={apparel.qty} />
          </FormField>
          <FormField label="Price">
            <TextInput
              name="price"
              value={apparelInfo.price}
              onDOMChange={this.handleChangeInfo}
            />
          </FormField>
          <FormField label="Selling Price">
            <TextInput name="sellingPrice" value={apparel.sellingPrice} />
          </FormField>
          <Footer justify="between" pad={{ vertical: 'medium' }}>
            <Button label="Submit" type="submit" primary={true} />
            <Button
              label="Delete"
              critical
              onClick={this.handleConfirmDelete}
            />
          </Footer>
        </Form>
      </Layer>
    );
  }
}

export default ApparelInfo;
