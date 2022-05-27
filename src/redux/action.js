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
})


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
<<<<<<< HEAD
=======

export const getData = () => {
    return async dispatch => {
        await axios.get("http://localhost:3002/users")
        .then(res => {
            const data = res.data
                dispatch(fetchData(data));
        })
        }
    }
>>>>>>> 652ae4f69fd5099c5bcf0de8d70f9e0717a858c4
