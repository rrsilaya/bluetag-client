import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class AddApparel extends Component {
  handleChangeForm = e => {
    this.props.handleChangeForm(e.target.name, e.target.value);
  };

  handleAddApparel = e => {
    e.preventDefault();
    this.props.handleAddApparel(this.props.newApparel);
  };

  render() {
    const { newApparel, toggleModal } = this.props;

    return (
      <Layer closer onClose={toggleModal}>
        <Form onSubmit={this.handleAddApparel}>
          <Heading>Add New Apparel</Heading>
          <FormField label="ID">
            <TextInput
              name="id"
              value={newApparel.id}
              onDOMChange={this.handleChangeForm}
            />
          </FormField>
          <FormField label="Brand">
            <TextInput
              name="brand"
              value={newApparel.brand}
              onDOMChange={this.handleChangeForm}
            />
          </FormField>
          <FormField label="Type">
            <TextInput
              name="type"
              value={newApparel.type}
              onDOMChange={this.handleChangeForm}
            />
          </FormField>
          <FormField label="Size">
            <TextInput
              name="size"
              value={newApparel.size}
              onDOMChange={this.handleChangeForm}
            />
          </FormField>
          <FormField label="Color">
            <TextInput
              name="color"
              value={newApparel.color}
              onDOMChange={this.handleChangeForm}
            />
          </FormField>
          <FormField label="Price">
            <TextInput
              name="price"
              value={newApparel.price}
              onDOMChange={this.handleChangeForm}
            />
          </FormField>
          <Footer justify="end" pad={{ vertical: 'medium' }}>
            <Button label="Add Apparel" type="submit" primary={true} />
          </Footer>
        </Form>
      </Layer>
    );
  }
}

export default AddApparel;
