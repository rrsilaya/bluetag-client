import { combineReducers } from 'redux';

import auth from './entities/auth';
import employee from './entities/employee';
import statistics from './entities/statistics';
import order from './entities/order';
import apparel from './entities/apparel';
import log from './entities/log';

const root = combineReducers({
  // place all reducers here
  auth,
  employee,
  statistics,
  order,
  apparel,
  log
});

export default root;
