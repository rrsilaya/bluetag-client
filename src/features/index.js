import { combineReducers } from 'redux';

import auth from './entities/auth';
import employee from './entities/employee';
import apparel from './entities/apparel';
import discount from './entities/discount';
import stock from './entities/stock';

const root = combineReducers({
  // place all reducers here
  auth,
  employee,
  apparel,
  discount,
  stock
});

export default root;
