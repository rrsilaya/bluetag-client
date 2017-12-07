import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class AddStock extends Component {
  componentDidMount() {
    this.props.handleChangeStockInfo('apparel', this.props.activeApparel);
  }

  handleChangeStockInfo = e => {
    this.props.handleChangeStockInfo(e.target.name, e.target.value);
  };

  handleAddStock = e => {
    e.preventDefault();
    this.props.handleAddStock(this.props.stockInfo);
  };

  render() {
    const { stockInfo, toggleModal } = this.props;

    return (
      <Layer closer onClose={toggleModal}>
        <Form onSubmit={this.handleAddStock}>
          <Heading>Add New Apparel</Heading>
          <FormField label="Apparel ID">
            <TextInput name="apparel" value={stockInfo.apparel} />
          </FormField>
          <FormField label="Quantity">
            <NumberInput
              name="qty"
              value={stockInfo.qty}
              onChange={this.handleChangeStockInfo}
            />
          </FormField>
          <FormField label="Delivery">
            <TextInput
              name="delivery"
              value={stockInfo.delivery}
              onDOMChange={this.handleChangeStockInfo}
            />
          </FormField>
          <Footer justify="end" pad={{ vertical: 'medium' }}>
            <Button label="Add Stock" type="submit" primary={true} />
          </Footer>
        </Form>
      </Layer>
    );
  }
}

export default AddStock;
