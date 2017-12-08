import React, { Component } from 'react';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';

import '../../style.css';

class Discount extends Component {
  render() {
    const { discounts } = this.props;

    return (
      <div>
        <Header justify="end">
          <Button label="Add Discount" />
        </Header>
        <div>
          <Table>
            <thead>
              <tr>
                <th />
                <th>ID</th>
                <th>Date</th>
                <th>Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {discounts.map((discount, index) => {
                return (
                  <TableRow key={index}>
                    <td>
                      <Button critical icon={<CloseIcon />} />{' '}
                    </td>
                    <td>{discount.id}</td>
                    <td>{discount.date}</td>
                    <td>{discount.rate + '%'}</td>
                    <td>{discount.isActive ? 'Active' : 'Expired'}</td>
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

export default Discount;
