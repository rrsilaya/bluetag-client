import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import Split from 'grommet/components/Split';
import CloseIcon from 'grommet/components/icons/base/Close';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

import AddStock from './StockAdd';
import ConfirmDelete from '../ConfirmDelete';

class StockInfo extends Component {
  handleChangeQuantity = e => {
    this.props.handleChangeQuantity(e.target.value);
  };

  handleToggleAddStock = () => {
    this.props.handleToggleAddStock();
  };

  handleConfirmDelete = () => {
    this.props.handleConfirmDelete();
  };

  render() {
    const {
      activeApparel,
      stocks,
      qty,
      addStock,
      stockInfo,
      handleChangeStockInfo,
      handleAddStock,
      confirmDelete,
      handleDeleteStock
    } = this.props;

    return (
      <Form>
        {addStock && (
          <AddStock
            activeApparel={activeApparel}
            stockInfo={stockInfo}
            toggleModal={this.handleToggleAddStock}
            handleChangeStockInfo={handleChangeStockInfo}
            handleAddStock={handleAddStock}
          />
        )}
        <Header justify="end">
          <Button label="Add Stock" onClick={this.handleToggleAddStock} />
        </Header>
        {stocks.map((stock, index) => {
          return (
            <div key={index}>
              {confirmDelete && (
                <ConfirmDelete
                  toggleDelete={this.handleConfirmDelete}
                  deleteItem={e => {
                    handleDeleteStock(stock.id);
                  }}
                />
              )}
              <Split flex="right" fixed={false} showOnResponsive="both">
                <Button
                  icon={<CloseIcon />}
                  critical
                  onClick={this.handleConfirmDelete}
                />
                <FormField label="Stock ID">
                  <TextInput name="id" value={stock.id} />
                </FormField>
                <FormField label="Quantity">
                  <TextInput
                    name="qty"
                    value={stock.qty}
                    onDOMChange={this.handleChangeQuantity}
                  />
                </FormField>
              </Split>
              <Split flex="left" fixed={false} showOnResponsive="both">
                <FormField label="Delivery Date">
                  <TextInput name="deiveryDate" value={stock.deliveryDate} />
                </FormField>
                <FormField label="Delivery">
                  <TextInput name="delivery" value={stock.delivery} />
                </FormField>
              </Split>
              <br />
            </div>
          );
        })}
        <Footer justify="between" pad={{ vertical: 'medium' }}>
          <Button label="Submit" type="submit" primary={true} />
        </Footer>
      </Form>
    );
  }
}

export default StockInfo;
