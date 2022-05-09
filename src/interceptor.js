import axios from "axios";
import {config} from "./config";
import {store} from "./redux/user/store";
import { logout } from "./redux/user/userAction";
import React from "react";


axios.interceptors.request.use(
    config => {
        const jwttoken = localStorage.getItem('jwttoken');
        if (jwttoken && config.url.indexOf('auth') === -1) {
            config.headers['Authorization'] = 'Bearer' + jwttoken;
        }
        return config;
    }, error => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
      return response;
    }, error => {
      if (error.response.status === 405) {
        return Promise.reject(error);
      } 
  
      return new Promise((resolve) => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem('refreshToken');
  
        if (error.response.status === 401 &&
          error.response.data.status === "fail" &&
          error.response.config.url.indexOf('/auth/refresh') !== -1) {
          const {dispatch} = store;
          dispatch(logout());
        }
  
        if (error.response.status === 401 && !originalRequest._retry &&
          error.response.config.url.indexOf('/auth/refresh') === -1) {
          originalRequest._retry = true;
          let response = axios.post(config.apiURL + 'auth/refresh', {
            refreshToken: refreshToken,
          }).then(res => {
            localStorage.setItem('jwttoken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            return axios(originalRequest);
          });
  
          resolve(response);
        }
  
        return Promise.reject(error)
      });
    },
  );