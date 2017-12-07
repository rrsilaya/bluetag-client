import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_ORDERS = 'ORDER/GET_ORDERS';
const GET_ORDER = 'ORDER/GET_ORDER';
const ADD_ORDER = 'ORDER/ADD_ORDER';
const EDIT_ORDER = 'ORDER/EDIT_ORDER';
const DELETE_ORDER = 'ORDER/DELETE_ORDER';
const TOGGLE_MODAL = 'ORDER/TOGGLE_MODAL';
const TOGGLE_DELETE_MODAL = 'ORDER/TOGGLE_DELETE_MODAL';
const TOGGLE_ADD_MODAL = 'ORDER/TOGGLE_ADD_MODAL';
const FORM_CHANGE = 'ORDER/FORM_CHANGE';
const ORDER_FORM_CHANGE = 'ORDER/ORDER_FORM_CHANGE';
const CHANGE_CATEGORY = 'ORDER/CHANGE_CATEGORY';
const CHANGE_SORT_ORDER = 'ORDER/CHANGE_SORT_ORDER';
const CHANGE_FILTER = 'ORDER/CHANGE_FILTER';

// Action Creators
export const getOrders = (page, sortCategory, sortOrder, filter) => {
  return dispatch => {
    return dispatch({
      type: GET_ORDERS,
      promise: Api.getOrderByPage(page, sortCategory, sortOrder, filter)
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

export const addOrder = company => {
  return dispatch => {
    return dispatch({
      type: ADD_ORDER,
      promise: Api.addOrder(company)
    });
  };
};

export const editOrder = (id, orderInfo) => {
  return dispatch => {
    return dispatch({
      type: EDIT_ORDER,
      promise: Api.editOrder(id, orderInfo),
      meta: { id }
    });
  };
};

export const deleteOrder = id => {
  return dispatch => {
    return dispatch({
      type: DELETE_ORDER,
      promise: Api.deleteOrder(id),
      meta: { id }
    });
  };
};

export const toggleModal = order => {
  return {
    type: TOGGLE_MODAL,
    payload: order
  };
};

export const toggleDeleteModal = () => {
  return {
    type: TOGGLE_DELETE_MODAL
  };
};

export const toggleAddModal = () => {
  return {
    type: TOGGLE_ADD_MODAL
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

export const orderFormChange = (company, value) => {
  return {
    type: ORDER_FORM_CHANGE,
    payload: {
      company,
      value
    }
  };
};

export const changeSortCategory = (page, sortCategory, sortOrder, filter) => {
  return dispatch => {
    return dispatch({
      type: CHANGE_CATEGORY,
      promise: Api.getOrderByPage(page, sortCategory, sortOrder, filter),
      meta: { sortCategory }
    });
  };
};

export const changeSortOrder = order => {
  return {
    type: CHANGE_SORT_ORDER,
    payload: order
  };
};

export const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    payload: filter
  };
};

const initialState = {
  page: 1,
  pages: 0,

  // Sort order
  filter: '',
  sortCategory: 'timestamp',
  sortOrder: 'desc',

  // Get order by page
  orders: [],

  // Get order by id
  order: {},
  isGettingOrder: false,

  // Add order
  newOrder: {
    company: ''
  },
  isAddingOrder: false,

  // Edit order
  isEditingOrder: false,

  // Delete order
  isDeletingOrder: false,

  // Modals
  showModal: false,
  showDeleteModal: false,
  showAddModal: false
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

    case ADD_ORDER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isAddingOrder: true
        }),
        success: prevState => ({
          ...prevState
        }),
        finish: prevState => ({
          ...prevState,
          isAddingOrder: false
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

    case TOGGLE_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: !state.showDeleteModal
      };

    case TOGGLE_ADD_MODAL:
      return {
        ...state,
        showAddModal: !state.showAddModal
      };

    case EDIT_ORDER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isEditingOrder: true
        }),
        success: prevState => ({
          ...prevState,
          order: payload.data.data,
          orders: prevState.orders.map(
            order =>
              order.id === action.meta.id ? (order = state.order) : order
          ),
          showModal: !prevState.showModal
        }),
        finish: prevState => ({
          ...prevState,
          isEditingOrder: false
        })
      });

    case DELETE_ORDER:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isDeletingOrder: true
        }),
        success: prevState => ({
          ...prevState,
          orders: prevState.orders.filter(order => order.id !== action.meta.id),
          showDeleteModal: false
        }),
        finish: prevState => ({
          ...prevState,
          isDeletingOrder: false
        })
      });

    case FORM_CHANGE:
      return {
        ...state,
        order: {
          ...state.order,
          [payload.name]: payload.option
        }
      };

    case ORDER_FORM_CHANGE:
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          [payload.company]: payload.value
        }
      };

    case CHANGE_CATEGORY:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          page: 1,
          filter: '',
          sortCategory: action.meta.sortCategory,
          isGettingOrders: true
        }),
        success: prevState => ({
          ...prevState,
          orders: state.orders.filter(
            order => payload.data.data.order === order
          ),
          page: state.page + 1,
          pages: payload.data.data.pages
        }),
        finish: prevState => ({
          ...prevState,
          sortCategory: action.meta.sortCategory,
          isGettingOrders: false
        })
      });

    case CHANGE_SORT_ORDER:
      return {
        ...state,
        sortOrder: payload
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload
      };

    default:
      return state;
  }
};

export default reducer;
