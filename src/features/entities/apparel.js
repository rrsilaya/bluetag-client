import * as Api from '../api';
import { handle } from 'redux-pack';

//Action Types
const GET_ALL_APPAREL = 'APPAREL/GET_ALL_APPAREL';
const GET_APPAREL = 'APPAREL/GET_APPAREL';

//Action Creators
export const getApparel = page => {
  return dispatch => {
    return dispatch({
      type: GET_ALL_APPAREL,
      promise: Api.getApparel(page)
    });
  };
};

export const getApparelByID = id => {
  console.log(id);
  return dispatch => {
    return dispatch({
      type: GET_APPAREL,
      promise: Api.getApparelByID(id)
    });
  };
};

//Initial State
const initialState = {
  apparels: [],
  apparel: null,
  pages: 1,
  page: 1,
  isGettingApparel: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_APPAREL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingApparel: true
        }),
        success: prevState => ({
          ...prevState,
          apparels: [...state.apparels, ...payload.data.data.apparel],
          page: payload.data.data.page,
          pages: payload.data.data.pages
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false,
          page: state.page + 1
        })
      });
    case GET_APPAREL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingApparel: true
        }),
        success: prevState => ({
          ...prevState,
          apparel: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false
        })
      });
    default:
      return state;
  }
};

export default reducer;
