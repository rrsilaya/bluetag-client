import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import Split from 'grommet/components/Split';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import StockInfo from './stock/StockInfoContainer';
import ConfirmDelete from './ConfirmDelete';

class ApparelInfo extends Component {
  componentDidMount() {
    this.props.handleGetApparelByID(this.props.activeApparel);
    this.props.handleGetStocks(this.props.activeApparel);
  }

  handleToggleModal = () => {
    this.props.toggleModal();
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
  };

  handleConfirmDelete = () => {
    this.props.handleConfirmDelete();
  };

  handleDeleteApparel = () => {
    this.props.handleDeleteApparel(this.props.activeApparel);
  };

  render() {
    const { apparel, apparelInfo } = this.props;

    return (
      <Layer onClose={this.handleToggleModal}>
        {this.props.confirmDelete && (
          <ConfirmDelete
            deleteItem={this.handleDeleteApparel}
            toggleDelete={this.handleConfirmDelete}
          />
        )}
        <Tabs justify="start">
          <Tab title="Apparel Information">
            <Form onSubmit={this.handleEditApparel}>
              <Split fixed={false} showOnResponsive="both">
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
              </Split>
              <Split fixed={false} showOnResponsive="both">
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
              </Split>
              <Split fixed={false} showOnResponsive="both">
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
              </Split>
              <Split fixed={false} showOnResponsive="both">
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
              </Split>
              <Footer justify="between" pad={{ vertical: 'medium' }}>
                <Button label="Submit" type="submit" primary={true} />
                <Button
                  label="Delete"
                  critical
                  onClick={this.handleConfirmDelete}
                />
              </Footer>
            </Form>
          </Tab>
          <Tab title="Discounts" />
          <Tab title="Stocks">
            <StockInfo />
          </Tab>
          <Tab title="Sales" />
        </Tabs>
      </Layer>
    );
  }
}

export default ApparelInfo;
