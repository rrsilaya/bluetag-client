import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_LOGS = 'LOG/GET_LOGS';

// Action Creators
export const getLogs = page => {
  return dispatch => {
    return dispatch({
      type: GET_LOGS,
      promise: Api.getLogs(page)
    });
  };
};

const initialState = {
  page: 1,
  pages: 0,

  // Get logs by page
  logs: [],
  isGettingLogs: false
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LOGS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingLogs: true
        }),
        success: prevState => ({
          ...prevState,
          logs: [...state.logs, ...payload.data.data],
          page: state.page + 1,
          pages: payload.data.data.pages
        }),
        finish: prevState => ({
          ...prevState,
          isGettingLogs: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
