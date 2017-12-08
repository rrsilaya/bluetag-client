import * as Api from '../api';
import { handle } from 'redux-pack';

// Actions
const GET_EMPLOYEES = 'EMPLOYEE/GET_EMPLOYEES';

// Action Creators
export const getEmployees = page => {
  return dispatch => {
    return dispatch({
      type: GET_EMPLOYEES,
      promise: Api.getEmployees(page)
    });
  };
};

// Initial State
const initialState = {
  employees: [],

  page: 1,
  pages: 1,
  isGettingEmployees: false
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EMPLOYEES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingEmployees: true
        }),
        success: prevState => ({
          ...prevState,
          employees: [...state.employees, ...payload.data.data.users],
          page: state.page + 1,
          pages: payload.data.data.pages
        }),
        finish: prevState => ({
          ...prevState,
          isGettingEmployees: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
