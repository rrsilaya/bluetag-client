import React, { Component } from 'react';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';

import AddSale from './SaleAdd';
import ConfirmDelete from '../ConfirmDelete';

import '../../style.css';

class Sale extends Component {
  handleToggleAdd = () => {
    this.props.handleToggleAdd();
  };

  handleConfirmDelete = () => {
    this.props.handleConfirmDelete();
  };

  render() {
    const {
      activeApparel,
      sales,
      addSale,
      salesInfo,
      confirmDelete,
      handleChangeSaleInfo,
      handleAddSale,
      handleDeleteSale
    } = this.props;

    return (
      <div>
        {addSale && (
          <AddSale
            activeApparel={activeApparel}
            toggleModal={this.handleToggleAdd}
            salesInfo={salesInfo}
            handleChangeSaleInfo={handleChangeSaleInfo}
            handleAddSale={handleAddSale}
          />
        )}
        <Header justify="end">
          <Button label="Add Sale" onClick={this.handleToggleAdd} />
        </Header>
        <div>
          <Table>
            <thead>
              <tr>
                <th />
                <th>ID</th>
                <th>Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, index) => {
                return (
                  <TableRow key={index}>
                    {confirmDelete && (
                      <ConfirmDelete
                        toggleDelete={this.handleConfirmDelete}
                        deleteItem={e => {
                          handleDeleteSale(sale.id);
                        }}
                      />
                    )}
                    <td>
                      <Button
                        critical
                        icon={<CloseIcon />}
                        onClick={this.handleConfirmDelete}
                      />
                    </td>
                    <td>{sale.id}</td>
                    <td>{sale.date}</td>
                    <td>{sale.qty}</td>
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

export default Sale;
