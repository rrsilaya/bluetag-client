import * as Api from '../api';
import { handle } from 'redux-pack';

//Action Types
const GET_STOCKS = 'STOCK/GET_STOCKS';
const ADD_STOCK = 'STOCK/ADD_STOCK';
const EDIT_STOCKS = 'STOCK/EDIT_STOCKS';
const DELETE_STOCK = 'STOCK/DELETE_STOCK';
const CHANGE_QUANTITY = 'STOCK/CHANGE_QUANTITY';
const TOGGLE_ADD = 'STOCK/TOGGLE_ADD';
const CHANGE_INFO = 'STOCK/CHANGE_INFO;';
const CONFIRM_DELETE = 'STOCK/CONFIRM_DELETE';

//Action Creators
export const getStocks = apparel => {
  return dispatch => {
    return dispatch({
      type: GET_STOCKS,
      promise: Api.getStocks(apparel)
    });
  };
};

export const addStock = stock => {
  return dispatch => {
    return dispatch({
      type: ADD_STOCK,
      promise: Api.addStock(stock)
    });
  };
};

export const editStock = (id, stockInfo) => {
  return dispatch => {
    return dispatch({
      type: EDIT_STOCKS,
      promise: Api.editStock(id, stockInfo)
    });
  };
};

export const deleteStock = id => {
  return dispatch => {
    return dispatch({
      type: DELETE_STOCK,
      promise: Api.deleteStock(id)
    });
  };
};

export const changeQuantity = value => {
  return {
    type: CHANGE_QUANTITY,
    payload: value
  };
};

export const toggleAddStock = () => {
  return {
    type: TOGGLE_ADD,
    payload: null
  };
};

export const changeStockInfo = (name, value) => {
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
  stocks: [],
  qty: '',

  addStock: false,
  stockInfo: {
    qty: 0,
    apparel: '',
    delivery: ''
  },

  confirmDelete: false,

  isGettingStocks: false,
  isAddingStock: false,
  isDeletingStock: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STOCKS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingStocks: true
        }),
        success: prevState => ({
          ...prevState,
          stocks: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingStocks: false
        })
      });
    case ADD_STOCK:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isAddingStock: true
        }),
        success: prevState => ({
          ...prevState,
          stocks: [...state.stocks, payload.data.data]
        }),
        finish: prevState => ({
          ...prevState,
          isAddingStock: false,
          addStock: false
        })
      });
    case DELETE_STOCK:
      return {
        ...state,
        confirmDelete: false
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        qty: payload
      };
    case TOGGLE_ADD:
      return {
        ...state,
        addStock: !state.addStock
      };
    case CHANGE_INFO:
      return {
        ...state,
        stockInfo: {
          ...state.stockInfo,
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
