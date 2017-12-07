import * as Api from '../api';
import { handle } from 'redux-pack';

//Action Types
const GET_ALL_APPAREL = 'APPAREL/GET_ALL_APPAREL';
const GET_APPAREL = 'APPAREL/GET_APPAREL';
const EDIT_APPAREL = 'APPAREL/EDIT_APPAREL';
const DELETE_APAPREL = 'APPAREL/DELETE_APPAREL';
const CONFIRM_DELETE = 'APPAREL/CONFIRM_DELETE';
const CHANGE_FORM = 'APPAREL/CHANGE_FORM';
const TOGGLE_ADD = 'APPAREL/TOGGLE_ADD';
const ADD_APPAREL = 'APPAREL/ADD_APPAREL';
const CHANGE_SEARCH = 'APPAREL/CHANGE_SEARCH';
const CHANGE_SELECT = 'APPAREL/CHANGE_LABEL';
const CHANGE_ORDER = 'APPAREL/CHANGE_ORDER';
const FILTER_CLASSIFICATION = 'APPAREL/FILTER_CLASSIFICATION';
const SEARCH_APPAREL = 'APPAREL/SEARCH_APPAREL';
const FILTER_APPAREL = 'APPAREL/FILTER_APPAREL';
const TOGGLE_MODAL = 'APPAREL/TOGGLE_MODAL';
const CHANGE_INFO = 'APPAREL/CHANGE_INFO';

//Action Creators
export const getApparel = (page, search) => {
  return dispatch => {
    return dispatch({
      type: GET_ALL_APPAREL,
      promise: Api.getApparel(page, search)
    });
  };
};

export const searchApparel = (page, search) => {
  return dispatch => {
    return dispatch({
      type: SEARCH_APPAREL,
      promise: Api.getApparel(page, search)
    });
  };
};

export const filterApparel = (page, search) => {
  return dispatch => {
    return dispatch({
      type: FILTER_APPAREL,
      promise: Api.getApparel(page, search)
    });
  };
};

export const filterClassification = (page, search) => {
  return dispatch => {
    return dispatch({
      type: FILTER_CLASSIFICATION,
      promise: Api.getApparel(page, search)
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

export const changeSearch = value => {
  return {
    type: CHANGE_SEARCH,
    payload: value
  };
};

export const changeOrder = value => {
  return {
    type: CHANGE_ORDER,
    payload: value
  };
};

export const changeSelect = (name, value) => {
  return {
    type: CHANGE_SELECT,
    payload: {
      name,
      value
    }
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

export const toggleAdd = () => {
  return {
    type: TOGGLE_ADD,
    payload: null
  };
};

export const confirmDelete = () => {
  return {
    type: CONFIRM_DELETE,
    payload: null
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

  addModal: false,
  newApparel: {
    id: '',
    brand: '',
    type: '',
    size: '',
    color: '',
    price: ''
  },

  searchApparel: {
    label: 'id',
    q: '',
    classification: '',
    category: 'brand',
    order: 'asc'
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

  confirmDelete: false,

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
          page: state.page + 1,
          pages: payload.data.data.pages
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false
        })
      });
    case SEARCH_APPAREL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingApparel: true,
          page: 1,
          searchApparel: {
            ...state.searchApparel,
            category: 'brand',
            order: 'asc',
            classification: ''
          }
        }),
        success: prevState => ({
          ...prevState,
          apparels: state.apparels.filter(
            apparel => payload.data.data.apparel === apparel
          )
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false
        })
      });
    case FILTER_APPAREL:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingApparel: true,
          page: 1,
          searchApparel: {
            ...state.searchApparel,
            q: '',
            label: 'id',
            classification: ''
          }
        }),
        success: prevState => ({
          ...prevState,
          apparels: state.apparels.filter(
            apparel => payload.data.data.apparel === apparel
          )
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false
        })
      });
    case FILTER_CLASSIFICATION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingApparel: true,
          page: 1,
          searchApparel: {
            ...state.searchApparel,
            q: '',
            label: 'id',
            category: 'brand',
            order: 'asc'
          }
        }),
        success: prevState => ({
          ...prevState,
          apparels: state.apparels.filter(
            apparel => payload.data.data.apparel === apparel
          )
        }),
        finish: prevState => ({
          ...prevState,
          isGettingApparel: false
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
          isGettingApparel: false,
          infoModal: false
        })
      });
    case ADD_APPAREL:
      return {
        ...state,
        addModal: false
      };
    case DELETE_APAPREL:
      return {
        ...state,
        infoModal: false
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        searchApparel: {
          ...state.searchApparel,
          q: payload
        }
      };
    case CHANGE_SELECT:
      return {
        ...state,
        searchApparel: {
          ...state.searchApparel,
          [payload.name]: payload.value
        }
      };
    case CHANGE_ORDER:
      return {
        ...state,
        searchApparel: {
          ...state.searchApparel,
          order: payload
        }
      };
    case CHANGE_FORM:
      return {
        ...state,
        newApparel: {
          ...state.newApparel,
          [payload.name]: payload.value
        }
      };
    case TOGGLE_ADD:
      return {
        ...state,
        addModal: !state.addModal
      };
    case CONFIRM_DELETE:
      return {
        ...state,
        confirmDelete: !state.confirmDelete
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
