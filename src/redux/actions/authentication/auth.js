import instance from '../../../config/http';
import setAuthUser from '../utils/authActions';
import errorResponse from '../utils/errorResponse';
import { toggleLoader } from '../loaderActions';

const logIn = (payload, history) => async dispatch => {
  try {
    dispatch(toggleLoader());
    const response = await instance.post('/TokenAuth/Authenticate', payload);
    const { accessToken, countResult } = response.data.result;
    dispatch(toggleLoader());
    dispatch(setAuthUser(accessToken, countResult));
    history.push('/');
  } catch (errors) {
    const { response = {}, request } = errors;

    const data = {
      dispatch,
      request,
      response,
      errors,
    };
    dispatch(toggleLoader());
    return errorResponse(data);
  }
  return 'done';
};

export default logIn;
