import { getDashboardInfo } from '../../../api/dashboard';
import { ACTIONS } from '../actionTypes';

// Get dashboard info
const getDashboardSuccess = payload => ({
  type: ACTIONS.ADMIN_GET_DASHBOARD_INFO_SUCCESS,
  payload,
});

const getDashboardLoading = () => ({
  type: ACTIONS.ADMIN_GET_DASHBOARD_INFO_LOADING,
});

const getDashboardFailure = errors => ({
  type: ACTIONS.ADMIN_GET_DASHBOARD_INFO_FAILURE,
  errors,
});

const getDashboardDetails = () => async dispatch => {
  try {
    dispatch(getDashboardLoading());
    const response = await getDashboardInfo();
    return dispatch(getDashboardSuccess(response.data.result));
  } catch (errors) {
    return dispatch(getDashboardFailure(errors));
    // TODO How do we handle errors now? central error handler?
  }
};

export default getDashboardDetails;
