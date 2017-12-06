import * as Api from '../api';
import { handle } from 'redux-pack';

//Action Types
const GET_ALL_APPAREL = 'APPAREL/GET_ALL_APPAREL';
const GET_APPAREL = 'APPAREL/GET_APPAREL';
const EDIT_APPAREL = 'APPAREL/EDIT_APPAREL';
const DELETE_APAPREL = 'APPAREL/DELETE_APPAREL';
const CHANGE_FORM = 'APPAREL/CHANGE_FORM';
const ADD_APPAREL = 'APPAREL/ADD_APPAREL';
const TOGGLE_MODAL = 'APPAREL/TOGGLE_MODAL';
const CHANGE_INFO = 'APPAREL/CHANGE_INFO';

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
  return dispatch => {
    return dispatch({
      type: GET_APPAREL,
      promise: Api.getApparelByID(id)
    });
  };
};

export const editApparel = (id, apparelInfo) => {
  return dispatch => {
    return dispatch({
      type: EDIT_APPAREL,
      promise: Api.editApparel(id, apparelInfo)
    });
  };
};

export const deleteApparel = id => {
  return dispatch => {
    return dispatch({
      type: DELETE_APAPREL,
      promise: Api.deleteApparel(id)
    });
  };
};

export const addApparel = apparel => {
  return dispatch => {
    return dispatch({
      type: ADD_APPAREL,
      promise: Api.addApparel(apparel)
    });
  };
};

export const changeForm = (name, value) => {
  return {
    type: CHANGE_FORM,
    payload: {
      name,
      value
    }
  };
};

export const toggleModal = apparel => {
  return {
    type: TOGGLE_MODAL,
    payload: apparel
  };
};

export const changeInfo = (name, value) => {
  return {
    type: CHANGE_INFO,
    payload: {
      name,
      value
    }
  };
};

//Initial State
const initialState = {
  apparels: [],
  apparel: {},

  newApparel: {
    id: '',
    brand: '',
    type: '',
    size: '',
    color: '',
    price: ''
  },

  infoModal: false,
  activeApparel: null,
  apparelInfo: {
    brand: '',
    type: '',
    size: '',
    color: '',
    price: ''
  },

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
          apparel: payload.data.data,
          apparelInfo: {
            brand: payload.data.data.brand,
            type: payload.data.data.type,
            size: payload.data.data.size,
            color: payload.data.data.color,
            price: payload.data.data.price
          }
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false
        })
      });
    case EDIT_APPAREL:
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
    case CHANGE_FORM:
      return {
        ...state,
        newApparel: {
          ...state.newApparel,
          [payload.name]: payload.value
        }
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        infoModal: !state.infoModal,
        activeApparel: payload
      };
    case CHANGE_INFO:
      return {
        ...state,
        apparelInfo: {
          ...state.apparelInfo,
          [payload.name]: payload.value
        }
      };
    default:
      return state;
  }
};

export default reducer;
