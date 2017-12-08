import * as Api from '../api';
import { handle } from 'redux-pack';

//Action Types
const GET_SALES = 'SALE/GET_SALES';
const ADD_SALE = 'SALE/ADD_SALE';
const DELETE_SALE = 'SALE/DELETE_SALE';
const TOGGLE_ADD = 'SALE/TOGGLE_ADD';
const CHANGE_INFO = 'SALE/CHANGE_INFO';
const CONFIRM_DELETE = 'SALE/CONFIRM_DELETE';

//Action Creators
export const getSales = apparel => {
  return dispatch => {
    return dispatch({
      type: GET_SALES,
      promise: Api.getSales(apparel)
    });
  };
};

export const addSale = (apparel, sale) => {
  return dispatch => {
    return dispatch({
      type: ADD_SALE,
      promise: Api.addSale(apparel, sale)
    });
  };
};

export const deleteSale = id => {
  return dispatch => {
    return dispatch({
      type: DELETE_SALE,
      promise: Api.deleteSale(id)
    });
  };
};

export const toggleAdd = () => {
  return {
    type: TOGGLE_ADD,
    payload: null
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

export const confirmDelete = () => {
  return {
    type: CONFIRM_DELETE,
    payload: null
  };
};

//Initial State
const initialState = {
  sales: [],

  addSale: false,
  salesInfo: {
    qty: 0,
    stock: ''
  },

  confirmDelete: false,

  isGettingSales: false,
  isAddingSale: false,
  isDeletingSale: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SALES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSales: true
        }),
        success: prevState => ({
          ...prevState,
          sales: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSales: false
        })
      });
    case ADD_SALE:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isAddingSale: true
        }),
        success: prevState => ({
          ...prevState,
          stocks: [...state.sales, payload.data.data]
        }),
        finish: prevState => ({
          ...prevState,
          isAddingSale: false,
          addSale: false
        })
      });
    case DELETE_SALE:
      return {
        ...state,
        confirmDelete: false
      };
    case TOGGLE_ADD:
      return {
        ...state,
        addSale: !state.addSale
      };
    case CHANGE_INFO:
      return {
        ...state,
        salesInfo: {
          ...state.salesInfo,
          [payload.name]: payload.value
        }
      };
    case CONFIRM_DELETE:
      return {
        ...state,
        confirmDelete: !state.confirmDelete
      };

    default:
      return state;
  }
};

export default reducer;
