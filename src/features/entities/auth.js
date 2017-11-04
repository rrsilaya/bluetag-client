import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_SESSION = 'AUTH/GET_SESSION';
const LOGIN = 'AUTH/LOGIN';

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

// Initial State
const initialState = {
  /* Get Session */
  user: null,
  isGettingSession: true,

  /* Login */
  isLoggingIn: false,
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
          isLoggingIn: true
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
          isLoggingIn: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
