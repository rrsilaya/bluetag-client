import * as Api from '../api';
import { handle } from 'redux-pack';

//Action Types
const GET_DISCOUNTS = 'DISCOUNT/GET_DISCOUNTS';

//Action Creators
export const getDiscounts = apparel => {
  return dispatch => {
    return dispatch({
      type: GET_DISCOUNTS,
      promise: Api.getDiscounts(apparel)
    });
  };
};

//Initial State
const initialState = {
  discounts: [],

  isGettingDiscounts: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DISCOUNTS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingDiscounts: true
        }),
        success: prevState => ({
          ...prevState,
          discounts: payload.data.data
        }),
        failure: prevState => ({
          ...prevState,
          isGettingDiscounts: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
