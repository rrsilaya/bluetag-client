import React, { Component } from 'react';
import * as moment from 'moment';

import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import LogSearch from './components/LogSearchContainer';

class Logs extends Component {
  componentDidMount() {
    this.props.handleGetLogs(
      this.props.page,
      this.props.sortCategory,
      this.props.sortOrder
    );
  }

  handleLoadMore = () => {
    if (this.props.page <= 34) {
      this.props.handleGetLogs(
        this.props.page,
        this.props.sortCategory,
        this.props.sortOrder
      );
    }
  };

  render() {
    const {
      logs,
      isGettingLogs,
      page,
      pages,
      sortCategory,
      sortOrder
    } = this.props;
    return (
      <div className="logTable">
        <h2>Logs</h2>
        <LogSearch />
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
                  <td>{log.action}</td>
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
