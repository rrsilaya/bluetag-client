import * as Api from '../api';
import { handle } from 'redux-pack';

// Action Types
const GET_STATISTICS = 'STATISTICS/GET_STATISTICS';

// Action Creators
export const getStatistics = () => {
  return dispatch => {
    return dispatch({
      type: GET_STATISTICS,
      promise: Api.getStatistics()
    });
  };
};

const initialState = {
  statistics: {
    statistics: [],
    fastMovingItems: 0,
    slowMovingItems: 0,
    disposalItems: 0,
    discountedItems: 0
  },
  isGettingStatistics: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STATISTICS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingStatistics: true
        }),
        success: prevState => ({
          ...prevState,
          statistics: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingStatistics: false
        })
      });
    default:
      return state;
  }
};

export default reducer;
