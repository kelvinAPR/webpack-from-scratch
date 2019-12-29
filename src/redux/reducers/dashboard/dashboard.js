import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
  error: [],
};

// kpi reducer
const kpiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADMIN_GET_DASHBOARD_INFO_LOADING:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };

    case ACTIONS.ADMIN_GET_DASHBOARD_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case ACTIONS.ADMIN_GET_DASHBOARD_INFO_FAILURE:
      return {
        ...state,
        error: action.errors,
        loading: false,
      };
    default:
      return state;
  }
};

export default kpiReducer;
