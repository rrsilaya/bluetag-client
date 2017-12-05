import { combineReducers } from 'redux';

import auth from './entities/auth';
import employee from './entities/employee';
import apparel from './entities/apparel';

const root = combineReducers({
  // place all reducers here
  auth,
  employee,
  apparel
});

export default root;
