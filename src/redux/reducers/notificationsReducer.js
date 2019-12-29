import { ACTIONS } from '../actions/actionTypes';

const initialState = {
  data: [],
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_NOTIFICATIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.GET_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ACTIONS.GET_NOTIFICATIONS_ERROR:
      return {
        ...state,
        error: action.errors,
        loading: false,
      };
    default:
      return state;
  }
};
