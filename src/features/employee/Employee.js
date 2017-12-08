import React, { Component } from 'react';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import './style.css';

class Employee extends Component {
  componentDidMount() {
    this.props.handleGetEmployees(this.props.page);
  }

  handleLoadMore = () => {
    if (this.props.page <= this.props.pages) {
      this.props.handleGetEmployees(this.props.page);
    }
  };

  render() {
    const { employees } = this.props;

    return (
      <div>
        <div className="apparelTable">
          <Table onMore={this.handleLoadMore}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Employee Type</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => {
                return (
                  <TableRow key={index} className="apparel-item">
                    <td>{employee.username}</td>
                    <td>{employee.type}</td>
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

export default Employee;
