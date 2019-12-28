import isEmpty from '../../../utils/isEmpty';
import { ACTIONS } from '../../actions/actionTypes';

const authDefaultState = {
  isAuthenticated: false,
  authenticatedUser: {},
  isLoading: false,
};

const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_AUTH_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        authenticatedUser: { ...action.payload },
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
