import jwt from 'jsonwebtoken';
import { ACTIONS } from '../actionTypes';
import configureLocalStorage from './configureLocalStorage';

const setAuthUser = (token, countResult) => {
  configureLocalStorage.setToken(token);

  const { jobRole, FullName, exp, SystemRoles } = jwt.decode(token);
  configureLocalStorage.setItem(
    'authenticatedUser',
    JSON.stringify({
      jobRole,
      FullName,
      exp,
      countResult,
      SystemRoles,
    })
  );
  // remember to set axios auth token here

  return {
    type: ACTIONS.SET_AUTH_USER,
    payload: {
      jobRole,
      FullName,
      exp,
      countResult,
      SystemRoles,
    },
  };
};

export default setAuthUser;
