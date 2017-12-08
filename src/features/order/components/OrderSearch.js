import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Sort from 'grommet-addons/components/Sort';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';

import AddOrder from './AddOrderContainer';

import '../style.css';

class ApparelSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleAddModal = () => {
    this.props.handleToggleAddModal();
  };

  handleChangeFilter = e => {
    this.props.handleChangeFilter(e.option);
  };

  handleChangeSortCategory = e => {
    const { page, sortOrder, filter } = this.props;
    this.props.handleChangeSortCategory(page, e.value, sortOrder, filter);
  };

  render() {
    const { page, filter, sortCategory, sortOrder, showAddModal } = this.props;
    return (
      <Tiles align="center" fill="true">
        {showAddModal && <AddOrder toggleModal={this.handleToggleModal} />}
        <Tile>
          <Select
            placeHolder="None"
            options={[
              { label: 'Delivered', value: 'delivered' },
              { label: 'Pending', value: 'pending' },
              { label: 'Cancelled', value: 'cancelled' },
              { label: 'None', value: 'none' }
            ]}
            value={filter}
            name="filter"
            onChange={this.handleChangeFilter}
          />
        </Tile>
        <Tile>
          <Sort
            options={[
              { label: 'Company', value: 'company', direction: sortOrder },
              { label: 'ID', value: 'id', direction: sortOrder },
              { label: 'Status', value: 'status', direction: sortOrder },
              { label: 'Timestamp', value: 'timestamp', direction: sortOrder },
              { label: 'None', value: 'none', direction: sortOrder }
            ]}
            value={sortCategory}
            direction={sortOrder}
            onChange={this.handleChangeSortCategory}
          />
        </Tile>
        <Tile>
          <Button onClick={this.handleToggleAddModal}>
            <AddIcon />
          </Button>
        </Tile>
      </Tiles>
    );
  }
}

export default ApparelSearch;
