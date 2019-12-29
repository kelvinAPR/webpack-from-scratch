import { fetchNotifications } from '../../api/notifications';
import { ACTIONS } from './actionTypes';

const fetchNotificationsLoading = () => ({
  type: ACTIONS.GET_NOTIFICATIONS_LOADING,
});
const fetchNotificationsSuccess = payload => ({
  type: ACTIONS.GET_NOTIFICATIONS_SUCCESS,
  payload,
});
const fetchNotificationsError = errors => ({
  type: ACTIONS.GET_NOTIFICATIONS_ERROR,
  errors,
});

export default () => async dispatch => {
  try {
    dispatch(fetchNotificationsLoading());
    const response = await fetchNotifications();
    dispatch(fetchNotificationsSuccess(response.data));
  } catch (errors) {
    dispatch(fetchNotificationsError(errors.response.data));
  }
  return 'done';
};
