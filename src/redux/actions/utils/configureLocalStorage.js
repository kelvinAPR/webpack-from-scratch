const configureLocalStorage = {
  setToken(token) {
    localStorage.setItem('access-token', token);
  },
  setItem(key, value) {
    localStorage.setItem(key, value);
  },
  getToken() {
    return localStorage.getItem('access-token');
  },
  removeItem(key) {
    return localStorage.removeItem(key);
  },
};

export default configureLocalStorage;
