import { combineReducers } from 'redux';

import auth from './entities/auth';
import employee from './entities/employee';
import statistics from './entities/statistics';
import order from './entities/order';
import apparel from './entities/apparel';
import discount from './entities/discount';
import stock from './entities/stock';
import sale from './entities/sale';
import log from './entities/log';

const root = combineReducers({
  // place all reducers here
  auth,
  employee,
  apparel,
  discount,
  stock,
  sale,
  statistics,
  order,
  log
});

export default root;
