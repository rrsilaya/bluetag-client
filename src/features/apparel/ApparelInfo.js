import React, { Component } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';

class ApparelInfo extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         currId: this.props.id
  //     }
  // }

  render() {
    console.log(this.props);
    return (
      <Layer onClose={this.props.toggleModal}>
        <Form>
          <Heading>Apparel Information</Heading>
          <FormField label="ID">
            <TextInput />
          </FormField>
          <FormField label="Brand">
            <TextInput />
          </FormField>
          <FormField label="Type">
            <TextInput />
          </FormField>
          <FormField label="Size">
            <TextInput />
          </FormField>
          <FormField label="Color">
            <TextInput />
          </FormField>
          <FormField label="Quantity">
            <TextInput />
          </FormField>
          <FormField label="Price">
            <TextInput />
          </FormField>
          <FormField label="Discount">
            <TextInput />
          </FormField>
          <FormField label="Selling Price">
            <TextInput />
          </FormField>
        </Form>
      </Layer>
    );
  }
}

export default ApparelInfo;
