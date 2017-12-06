import { combineReducers } from 'redux';

import auth from './entities/auth';
import employee from './entities/employee';
import statistics from './entities/statistics';
import order from './entities/order';

const root = combineReducers({
  // place all reducers here
  auth,
  employee,
  statistics,
  order
});

export default root;
