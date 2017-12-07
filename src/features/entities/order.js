import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_ORDERS = 'ORDER/GET_ORDERS';
const GET_ORDER = 'ORDER/GET_ORDER';
const EDIT_ORDER = 'ORDER/EDIT_ORDER';
const DELETE_ORDER = 'ORDER/DELETE_ORDER';
const TOGGLE_MODAL = 'ORDER/TOGGLE_MODAL';
const TOGGLE_DELETE_MODAL = 'ORDER/TOGGLE_DELETE_MODAL';
const FORM_CHANGE = 'ORDER/FORM_CHANGE';

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

export const toggleDeleteModal = order => {
  return {
    type: TOGGLE_DELETE_MODAL,
    payload: order
  };
};

export const formChange = (name, option) => {
  return {
    type: FORM_CHANGE,
    payload: {
      name,
      option
    }
  };
};

const initialState = {
  page: 1,
  pages: 0,

  // Get order by page
  orders: [],

  // Get order by id
  order: {},
  isGettingOrder: false,

  // Edit order
  orderInfo: {
    status: '',
    company: ''
  },
  isEditingOrder: false,

  // Delete order
  isDeletingOrder: false,

  // Modals
  showModal: false,
  showDeleteModal: false
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
          page: state.page + 1,
          pages: payload.data.data.pages
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
          order: payload.data.data,
          orderInfo: {
            status: payload.data.data.status,
            company: payload.data.data.company
          }
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

    case TOGGLE_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: !state.showDeleteModal,
        order: payload
      };

    case FORM_CHANGE:
      return {
        ...state,
        orderInfo: {
          ...state.orderInfo,
          [payload.name]: payload.option
        }
      };

    case EDIT_ORDER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isEditingOrder: true
        }),
        success: prevState => ({
          ...prevState,
          showModal: !prevState.showModal
        }),
        finish: prevState => ({
          ...prevState,
          isEditingOrder: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
