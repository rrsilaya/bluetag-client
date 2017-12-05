import React, { Component } from 'react';

import ApparelSearch from './ApparelSearch';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import './style.css';

class Apparel extends Component {
  render() {
    return (
      <div>
        <ApparelSearch />
        <div className="apparelTable">
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Size</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Selling Price</th>
              </tr>
            </thead>
            <tbody>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
              <TableRow>
                <td>340490415894177</td>
                <td>Rohan and Sons</td>
                <td>underwear</td>
                <td>XXL</td>
                <td>black</td>
                <td>1</td>
                <td>2237</td>
                <td>0%</td>
                <td>2237.00</td>
              </TableRow>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Apparel;
