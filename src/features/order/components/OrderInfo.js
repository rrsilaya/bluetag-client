import React, { Component } from 'react';
import * as moment from 'moment';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';

import Loader from '../../Loader';

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

class OrderInfo extends Component {
  componentDidMount() {
    this.props.handleGetOrder(this.props.order);
  }

  handleToggleModal = () => {
    this.props.handleToggleModal();
  };

  handleFormChange = e => {
    console.log(e.option);
    this.props.handleFormChange(e.target.name, e.option);
  };

  handleEditOrder = e => {
    e.preventDefault();
    this.props.handleEditOrder(this.props.order.id, this.props.orderInfo);
  };

  render() {
    const {
      order,
      orderInfo,
      showDeleteModal,
      isGettingOrder,
      isDeletingOrder,
      isEditingOrder
    } = this.props;

    return (
      <Layer closer onClose={this.handleToggleModal}>
        {this.props.showDeleteModal && (
          <ConfirmDelete
            deleteApparel={this.handleDeleteApparel}
            toggleDelete={this.handleConfirmDelete}
          />
        )}
        <Form onSubmit={this.handleEditOrder}>
          <Heading>Order Information</Heading>
          {isGettingOrder ? (
            <Loader />
          ) : (
            <div>
              <FormField label="ID">
                <TextInput name="id" value={order.id} />
              </FormField>
              <FormField label="Company">
                <TextInput
                  name="company"
                  value={orderInfo.company}
                  onDOMChange={this.handleFormChange}
                />
              </FormField>
              <FormField label="Status">
                <Select
                  name="status"
                  placeHolder="None"
                  options={['delivered', 'cancelled', 'pending']}
                  value={orderInfo.status}
                  onChange={this.handleFormChange}
                />
              </FormField>
              <FormField label="Timestamp">
                <TextInput
                  name="timestamp"
                  value={moment(order.timestamp).format(
                    'MMMM Do YYYY, h:mm:ss A'
                  )}
                  disabled
                />
              </FormField>
            </div>
          )}
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

export default OrderInfo;
