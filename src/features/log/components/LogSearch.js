import React, { Component } from 'react';

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Select from 'grommet/components/Select';
import Button from 'grommet/components/Button';
import LinkUpIcon from 'grommet/components/icons/base/LinkUp';
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';

import '../style.css';

class LogSearch extends Component {
  handleChangeFilter = e => {
    this.props.handleChangeFilter(e.option);
  };

  handleChangeSortCategory = e => {
    const { page, sortOrder } = this.props;
    this.props.handleChangeCategory(page, e.value.value, sortOrder);
  };

  handleSortLogs = e => {
    const { page, sortCategory } = this.props;
    this.props.handleSortLogs(page, sortCategory, e.target.value);
  };

  render() {
    const { page, sortCategory, sortOrder } = this.props;
    return (
      <Tiles fill={false}>
        <Tile>
          <Select
            options={[
              { label: 'timestamp', value: 'timestamp' },
              { label: 'activity', value: 'action' },
              { label: 'id', value: 'id' },
              { label: 'affected_id', value: 'affected_id' }
            ]}
            value={sortCategory}
            name="filter"
            onChange={this.handleChangeSortCategory}
          />
        </Tile>
        <Tile>
          <Button
            icon={<LinkUpIcon />}
            value="asc"
            onClick={this.handleSortLogs}
          />
        </Tile>
        <Tile>
          <Button
            icon={<LinkDownIcon />}
            value="desc"
            onClick={this.handleSortLogs}
          />
        </Tile>
      </Tiles>
    );
  }
}

export default LogSearch;
