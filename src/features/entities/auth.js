import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_SESSION = 'AUTH/GET_SESSION';
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

// Action Creators
export const getSession = () => {
  return dispatch => {
    return dispatch({
      type: GET_SESSION,
      promise: Api.getSession()
    });
  };
};

export const login = credentials => {
  return dispatch => {
    return dispatch({
      type: LOGIN,
      promise: Api.login(credentials)
    });
  };
};

export const logout = () => {
  return dispatch => {
    return dispatch({
      type: LOGOUT,
      promise: Api.logout()
    });
  };
};

// Initial State
const initialState = {
  /* Get Session */
  user: null,
  isGettingSession: true,

  /* Login */
  loginError: null
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SESSION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          user: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    case LOGIN:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          user: payload.data.data,
          loginError: null
        }),
        failure: prevState => ({
          ...prevState,
          loginError: payload.response.data.message
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    case LOGOUT:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          user: null
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
