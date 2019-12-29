import { combineReducers } from 'redux';
import authReducer from './authentication/authReducer';
import errorsReducer from './errorReducer';
import loaderReducer from './loaderReducer';
import notificationsReducer from './notificationsReducer';
import dashboard from './dashboard/dashboard';

const rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  toggleLoader: loaderReducer,
  notifications: notificationsReducer,
  dashboard,
});

export default rootReducer;
