import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class AddOrder extends Component {
  handleChangeForm = e => {
    this.props.handleChangeForm(e.target.name, e.target.value);
  };

  handleToggleAddModal = () => {
    this.props.handleToggleAddModal();
  };

  handleAddOrder = e => {
    e.preventDefault();
    this.props.handleAddOrder(this.props.newOrder);
  };

  handleFormChange = e => {
    this.props.handleOrderFormChange(e.target.name, e.target.value);
  };

  render() {
    return (
      <Layer closer onClose={this.handleToggleAddModal}>
        <Form onSubmit={this.handleAddOrder}>
          <Heading>Add New Order</Heading>
          <FormField label="Company">
            <TextInput
              name="company"
              defaultValue=""
              placeHolder="Enter name of company"
              onDOMChange={this.handleFormChange}
            />
          </FormField>
          <Footer justify="end" pad={{ vertical: 'medium' }}>
            <Button label="Add Order" type="submit" primary={true} />
          </Footer>
        </Form>
      </Layer>
    );
  }
}

export default AddOrder;
