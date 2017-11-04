import { combineReducers } from 'redux';

import auth from './entities/auth';
import employee from './entities/employee';

const root = combineReducers({
  // place all reducers here
  auth,
  employee
});

export default root;
