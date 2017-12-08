import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_LOGS = 'LOG/GET_LOGS';
const GET_LOGS_CATEGORY = 'LOG/GET_LOGS_CATEGORY';
const GET_LOG = 'LOG/GET_LOG';
const SORT_LOGS = 'LOG/SORT_LOGS';

// Action Creators
export const getLogs = (page, sortCategory, sortOrder) => {
  return dispatch => {
    return dispatch({
      type: GET_LOGS,
      promise: Api.getLogs(page, sortCategory, sortOrder)
    });
  };
};

export const getLog = id => {
  return dispatch => {
    return dispatch({
      type: GET_LOG,
      promise: Api.getLog(id)
    });
  };
};

export const changeCategory = (page, sortCategory, sortOrder) => {
  return dispatch => {
    return dispatch({
      type: GET_LOGS_CATEGORY,
      promise: Api.getLogs(page, sortCategory, sortOrder),
      meta: { sortCategory }
    });
  };
};

export const sortLogs = (page, sortCategory, sortOrder) => {
  return dispatch => {
    return dispatch({
      type: SORT_LOGS,
      promise: Api.getLogs(page, sortCategory, sortOrder),
      meta: { sortOrder }
    });
  };
};

const initialState = {
  page: 1,
  pages: 0,

  // Sort
  sortCategory: 'timestamp',
  sortOrder: 'desc',

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

    case GET_LOGS_CATEGORY:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingLogs: true
        }),
        success: prevState => ({
          ...prevState,
          logs: payload.data.data,
          sortCategory: action.meta.sortCategory
        }),
        finish: prevState => ({
          ...prevState,
          isGettingLogs: false
        })
      });

    case SORT_LOGS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingLogs: true
        }),
        success: prevState => ({
          ...prevState,
          logs: payload.data.data,
          sortOrder: action.meta.sortOrder
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
