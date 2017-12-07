import React, { Component } from 'react';
import * as moment from 'moment';

import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

class Logs extends Component {
  componentDidMount() {
    this.props.handleGetLogs(this.props.page);
  }

  handleLoadMore = () => {
    if (this.props.page <= 17) {
      this.props.handleGetLogs(this.props.page);
    }
  };

  formatActionString = string => {
    switch (string) {
      case 'edit_apparel':
        return 'Edit Apparel';
      case 'add_stock':
        return 'Add Stock';
      default:
        break;
    }
  };

  render() {
    const { logs, isGettingLogs } = this.props;
    return (
      <div className="logTable">
        <h2>Logs</h2>
        <Table onMore={this.handleLoadMore}>
          <TableHeader
            labels={[
              'Employee',
              'Activity',
              'Log ID',
              'Timestamp',
              'Affected ID'
            ]}
          />
          <tbody>
            {logs.map((log, i) => {
              return (
                <TableRow key={i} className="log-item">
                  <td>{log.employee}</td>
                  <td>{this.formatActionString(log.action)}</td>
                  <td>{log.id}</td>
                  <td>
                    {moment(log.timestamp).format('MMMM D YYYY, h:mm:ss A')}
                  </td>
                  <td>{log.affected_id}</td>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Logs;
