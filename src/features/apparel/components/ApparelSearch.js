import React, { Component } from 'react';

import AddApparel from './ApparelAddContainer';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import SearchInput from 'grommet/components/SearchInput';
import Select from 'grommet/components/Select';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';
import LinkUpIcon from 'grommet/components/icons/base/LinkUp';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';

import '../style.css';

class ApparelSearch extends Component {
  handleToggleModal = () => {
    this.props.handleToggleAdd();
  };

  handleChangeSearch = e => {
    this.props.handleChangeSearch(e.target.value);
  };

  handleChangeSelect = e => {
    this.props.handleChangeSelect(e.target.name, e.option.value);
  };

  handleSearchApparel = e => {
    e.preventDefault();
    this.props.handleSearchApparel(this.props.page, this.props.searchApparel);
  };

  handleFilterApparel = e => {
    this.props.handleChangeSelect(e.target.name, e.option.value);
    this.props.handleFilterApparel(this.props.page, this.props.searchApparel);
  };

  handleFilterClassification = e => {
    this.props.handleChangeSelect(e.target.name, e.option.value);
    this.props.handleFilterClassification(
      this.props.page,
      this.props.searchApparel
    );
  };

  render() {
    const { searchApparel, page, addModal } = this.props;

    return (
      <Tiles align="center" fill={true}>
        {addModal && <AddApparel toggleModal={this.handleToggleModal} />}
        <Tile>
          <Form compact onSubmit={this.handleSearchApparel}>
            <SearchInput
              name="q"
              value={searchApparel.q}
              placeHolder="Search"
              className="searchFull"
              onDOMChange={this.handleChangeSearch}
            />
          </Form>
        </Tile>
        <Tile>
          <Select
            options={[
              { label: 'ID', value: 'id' },
              { label: 'Brand', value: 'brand' },
              { label: 'Type', value: 'type' },
              { label: 'Size', value: 'size' },
              { label: 'Color', value: 'color' },
              { label: 'Price', value: 'price' },
              { label: 'Selling Price', value: 'sellingPrice' }
            ]}
            value={searchApparel.label}
            name="label"
            onChange={this.handleChangeSelect}
          />
        </Tile>
        <Tile direction="row">
          <Select
            options={[
              { label: 'Fast-moving', value: 'fast' },
              { label: 'Slow-moving', value: 'slow' },
              { label: 'Disposal', value: 'disposal' }
            ]}
            value={searchApparel.classification}
            name="classification"
            onChange={this.handleFilterClassification}
          />
          <Select
            options={[
              { label: 'ID', value: 'id' },
              { label: 'Brand', value: 'brand' },
              { label: 'Type', value: 'type' },
              { label: 'Size', value: 'size' },
              { label: 'Color', value: 'color' },
              { label: 'Price', value: 'price' },
              { label: 'Selling Price', value: 'sellingprice' }
            ]}
            value={searchApparel.category}
            name="category"
            onChange={this.handleFilterApparel}
          />
          <Button
            icon={<LinkUpIcon />}
            onClick={e => {
              this.props.handleChangeOrder('asc');
              this.props.handleFilterApparel(page, searchApparel);
            }}
          />
          <Button
            icon={<LinkDownIcon />}
            onClick={e => {
              this.props.handleChangeOrder('desc');
              this.props.handleFilterApparel(page, searchApparel);
            }}
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
