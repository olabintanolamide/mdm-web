/* eslint-disable camelcase */
import jwtDecode from 'jwt-decode';

const setToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getToken = () => {
  return localStorage.getItem('accessToken');
};

const getDecodedJwt = () => {
  try {
    const token = getToken();
    const decoded = jwtDecode(token);
    return decoded;
  } catch (e) {
    return {};
  }
};

const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken);
};

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

const removeToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

const logOut = (navigate) => {
  removeToken();
  navigate('/login');
};

const isAuthenticated = () => {
  try {
    const decodedToken = getDecodedJwt();
    if (decodedToken) {
      const { exp } = decodedToken;
      const currentTime = Date.now() / 1000;
      return exp > currentTime;
    }
    return false;
  } catch (e) {
    return false;
  }
};

const Auth = {
  isAuthenticated,
  getDecodedJwt,
  setToken,
  getToken,
  removeToken,
  setRefreshToken,
  getRefreshToken,
  logOut
};

export default Auth;
