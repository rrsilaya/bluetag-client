import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class AddSale extends Component {
  handleChangeSaleInfo = e => {
    this.props.handleChangeSaleInfo(e.target.name, e.target.value);
  };

  handleAddSale = e => {
    e.preventDefault();
    this.props.handleAddSale(this.props.activeApparel, this.props.salesInfo);
  };

  render() {
    const { activeApparel, salesInfo, toggleModal } = this.props;

    return (
      <Layer closer onClose={toggleModal}>
        <Form onSubmit={this.handleAddSale}>
          <Heading>Add New Sale</Heading>
          <FormField label="Apparel ID">
            <TextInput name="apparel" value={activeApparel} />
          </FormField>
          <FormField label="Quantity">
            <NumberInput
              name="qty"
              value={salesInfo.qty}
              onChange={this.handleChangeSaleInfo}
            />
          </FormField>
          <FormField label="Stock ID">
            <TextInput
              name="stock"
              value={salesInfo.stock}
              onDOMChange={this.handleChangeSaleInfo}
            />
          </FormField>
          <Footer justify="end" pad={{ vertical: 'medium' }}>
            <Button label="Add Sale" type="submit" primary={true} />
          </Footer>
        </Form>
      </Layer>
    );
  }
}

export default AddSale;
