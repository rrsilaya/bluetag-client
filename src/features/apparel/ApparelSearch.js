import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import SearchInput from 'grommet/components/SearchInput';
import Select from 'grommet/components/Select';
import Sort from 'grommet-addons/components/Sort';

import './style.css';

class ApparelSearch extends Component {
  render() {
    return (
      <Tiles align="center" fill="true">
        <Tile>
          <SearchInput placeHolder="Search" />
        </Tile>
        <Tile>
          <Select
            options={[
              'Brand',
              'Type',
              'Size',
              'Color',
              'Price',
              'Selling Price'
            ]}
            value="Brand"
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
      </Tiles>
    );
  }
}

export default ApparelSearch;
