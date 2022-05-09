import {LIST_USERS, LOGIN, LOGOUT } from "./userActionTypes";
import axios from "axios";
import {config,staticDataUrls} from "../../config";


export const parseJwt = (jwttoken) => {
    var base64Url = jwttoken.split('.')[1];
    var base64 = base64Url.replace(/-/g,'+').replace(/_/g,'/');
    var jsonPayLoad = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayLoad);
}

export const login = (role) => {
    return (dispatch) => {
        dispatch({
            type:LOGIN,
            role:role
        });
    }
}

export const logout = () => {
    return (dispatch) => {
      localStorage.removeItem('jwttoken');
      localStorage.removeItem('refreshToken');
      dispatch({
        type: LOGOUT
      });
    }
  }

export const getUsers = (key,id,patch) => {
   return async (dispatch,getState) => {
       if (getState().staticData[key].length === 0 || id) {
           let url = config.apiURL + staticDataUrls[key] + (id ? id : '') + (patch ? patch : '');
           await axios.get(url).then(res => {
               dispatch({
                   type: LIST_USERS,
                   data: res.data ? res.data : res.data.data,
                   key:key,
                   id: id
               })
           })
       }
   }
}


