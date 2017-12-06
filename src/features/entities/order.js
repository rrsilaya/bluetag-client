import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_ORDERS = 'ORDER/GET_ORDERS';
const GET_ORDER = 'ORDER/GET_ORDER';
const EDIT_ORDER = 'ORDER/EDIT_ORDER';
const DELETE_ORDER = 'ORDER/DELETE_ORDER';
const TOGGLE_MODAL = 'ORDER/TOGGLE_MODAL';

// Action Creators
export const getOrders = page => {
  return dispatch => {
    return dispatch({
      type: GET_ORDERS,
      promise: Api.getOrderByPage(page)
    });
  };
};

export const getOrder = id => {
  return dispatch => {
    return dispatch({
      type: GET_ORDER,
      promise: Api.getOrderById(id)
    });
  };
};

export const editOrder = (id, orderInfo) => {
  return dispatch => {
    return dispatch({
      type: EDIT_ORDER,
      promise: Api.editOrder(id, orderInfo)
    });
  };
};

export const deleteOrder = id => {
  return dispatch => {
    return dispatch({
      type: DELETE_ORDER,
      promise: Api.deleteOrder(id)
    });
  };
};

export const toggleModal = order => {
  return {
    type: TOGGLE_MODAL,
    payload: order
  };
};

const initialState = {
  page: 1,

  // Get order by page
  orders: [],
  isGettingOrders: false,

  // Get order by id
  order: {},
  isGettingOrder: false,

  // Delete order
  isDeletingOrder: false,

  // Modal
  showModal: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDERS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingOrders: true
        }),
        success: prevState => ({
          ...prevState,
          orders: [...state.orders, ...payload.data.data.orders],
          page: state.page + 1
        }),
        finish: prevState => ({
          ...prevState,
          isGettingOrders: false
        })
      });

    case GET_ORDER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingOrder: true
        }),
        success: prevState => ({
          ...prevState,
          order: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingOrder: false
        })
      });

    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
        order: payload
      };

    // case DELETE_ORDER:
    //   return handle(state, action, {
    //     start: prevState => ({
    //       ...prevState,
    //       isDeletingOrder: true
    //     }),
    //     success: prevState => ({
    //       ...prevState,
    //       orders: prevState.orders.filter
    //     })
    //   })

    default:
      return state;
  }
};

export default reducer;
