import { setErrors } from '../errorActions';

const errorResponse = ({ dispatch, request, response, errors }) => {
  if (response.status === 400) {
    return dispatch(setErrors(response.data.result));
  }
  if (response.status === 404) {
    return dispatch(setErrors({ mainError: response.data.message }));
  }
  if (response.status === 409) {
    return dispatch(
      setErrors({
        mainError: response.data.message,
      }),
    );
  }
  if (response.status === 500) {
    return dispatch(
      setErrors({
        mainError: response.data.error.details,
      }),
    );
  }
  if (errors.message) {
    console.log(errors.message);
    return dispatch(
      setErrors({
        mainError: 'A network error occured, please try again in a moment',
      }),
    );
  }
  if (request) {
    return dispatch(
      setErrors({
        mainError: 'An error occurred, and no response was received',
      }),
    );
  }

  return dispatch(
    setErrors({
      mainError:
        'Something went wrong, please try again. If you continue to see this message, please send email us at help@heimdal.com',
    }),
  );
};

export default errorResponse;
