/* eslint-disable */
import axios from 'axios';
import Auth from './auth';

export const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://api.mdm.prunedge.org/api/v1';

const Api = axios.create({
  baseURL: baseUrl
});


Api.interceptors.request.use(
  function (config) {
    if (Auth.isAuthenticated()) {
      config.headers.common['Authorization'] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response?.status === 401) {
    //   Auth.logOut();
    // }
    return Promise.reject(error);
  }
);

export default Api;
