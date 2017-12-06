import React, { Component } from 'react';

import AddApparel from './ApparelAddContainer';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import SearchInput from 'grommet/components/SearchInput';
import Select from 'grommet/components/Select';
import Sort from 'grommet-addons/components/Sort';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';

import './style.css';

class ApparelSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <Tiles align="center" fill="true">
        {this.state.showModal && (
          <AddApparel toggleModal={this.handleToggleModal} />
        )}
        <Tile>
          <SearchInput placeHolder="Search" className="searchFull" />
        </Tile>
        <Tile>
          <Select
            options={[
              'ID',
              'Brand',
              'Type',
              'Size',
              'Color',
              'Price',
              'Selling Price'
            ]}
            value="ID"
          />
        </Tile>
        <Tile>
          <Sort
            options={[
              { label: 'ID', value: 'id', direction: 'asc' },
              { label: 'Brand', value: 'brand', direction: 'asc' },
              { label: 'Type', value: 'type', direction: 'asc' },
              { label: 'Size', value: 'size', direction: 'asc' },
              { label: 'Color', value: 'color', direction: 'asc' },
              { label: 'Quantity', value: 'quantity', direction: 'asc' },
              { label: 'Price', value: 'price', direction: 'asc' },
              { label: 'Discount', value: 'discount', direction: 'asc' },
              {
                label: 'Selling Price',
                value: 'sellingprice',
                direction: 'asc'
              }
            ]}
            value="brand"
            direction="asc"
          />
        </Tile>
        <Tile>
          <Button onClick={this.handleToggleModal}>
            <AddIcon />
          </Button>
        </Tile>
      </Tiles>
    );
  }
}

export default ApparelSearch;
