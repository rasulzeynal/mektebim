import * as types from "./actionTypes";
import axios from "axios";


const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = (token) => ({
    type: types.LOGIN_SUCCESS,
    payload: token,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload:error,
})

export const logoutInitiate = () => ({
    type: types.LOGOUT_USER,
});

export const setErrorEmpty = () => ({
    type: types.SET_ERROR_EMPTY,
});

export const saveCourse = (course) => ({
    type: types.SAVE_COURSE,
    payload: course
});

export const loginInitiate = (email,password) => {
    return function(dispatch) {
        dispatch(loginStart());
        axios.post("http://localhost:5000/api/auth/login",{
      email,
      password
    }).then((response) => {
      dispatch(loginSuccess(response.data.access_token))
    })
    .catch((error) => dispatch(loginFail(error.response.data.message)));
    }
}
