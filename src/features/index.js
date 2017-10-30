import { combineReducers } from 'redux';

import employee from './entities/employee';

const root = combineReducers({
  // place all reducers here
  employee
});

export default root;