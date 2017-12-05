import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';

class ApparelInfo extends Component {
  componentDidMount() {
    this.props.handleGetApparelByID(this.props.activeApparel);
  }

  handleToggleModal = () => {
    this.props.toggleModal();
  };

  render() {
    const { apparel } = this.props;

    return (
      <Layer onClose={this.props.handleToggleModal}>
        <Form>
          <Heading>Apparel Information</Heading>
          <FormField label="ID">
            <TextInput name="id" value={apparel.id} />
          </FormField>
          <FormField label="Brand">
            <TextInput name="brand" value={apparel.brand} />
          </FormField>
          <FormField label="Type">
            <TextInput name="type" value={apparel.type} />
          </FormField>
          <FormField label="Size">
            <TextInput name="size" value={apparel.size} />
          </FormField>
          <FormField label="Color">
            <TextInput name="color" value={apparel.color} />
          </FormField>
          <FormField label="Quantity">
            <TextInput name="quantity" value={apparel.quantity} />
          </FormField>
          <FormField label="Price">
            <TextInput name="price" value={apparel.price} />
          </FormField>
          <FormField label="Discount">
            <TextInput name="discount" value={apparel.discount} />
          </FormField>
          <FormField label="Selling Price">
            <TextInput name="sellingPrice" value={apparel.sellingPrice} />
          </FormField>
        </Form>
      </Layer>
    );
  }
}

export default ApparelInfo;
