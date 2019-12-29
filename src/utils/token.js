export const getToken = () => localStorage.getItem('access-token');
export const removeToken = () => localStorage.removeItem('access-token');
export const getAuthenticatedUser = () =>
  localStorage.getItem('authenticatedUser');
