import React, { Component } from 'react';

import ApparelSearch from './ApparelSearch';
import ApparelInfo from './ApparelInfoContainer';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import './style.css';

class Apparel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  componentDidMount() {
    this.props.handleGetApparel(this.props.page);
  }

  handleToggleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  handleLoadMore = () => {
    this.props.handleGetApparel(this.props.page);
  };

  render() {
    const { apparels } = this.props;

    return (
      <div>
        <ApparelSearch />
        <div className="apparelTable">
          <Table onMore={this.handleLoadMore}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Size</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Selling Price</th>
              </tr>
            </thead>
            <tbody>
              {apparels.map((apparel, index) => {
                return (
                  <TableRow key={index} onClick={this.handleToggleModal}>
                    {this.state.openModal && (
                      <ApparelInfo
                        id={apparel.id}
                        toggleModal={this.handleToggleModal}
                      />
                    )}
                    <td>{apparel.id}</td>
                    <td>{apparel.brand}</td>
                    <td>{apparel.type}</td>
                    <td>{apparel.size}</td>
                    <td>{apparel.color}</td>
                    <td>{apparel.qty}</td>
                    <td>{apparel.price}</td>
                    <td>{apparel.sellingPrice}</td>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Apparel;
