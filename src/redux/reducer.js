import * as types from "./actionTypes";
const initialState = {
    user: null,
    loading: false,
    error: null
};

const authReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.LOGIN_START:
            return {
                ...state,
                loading:true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                user: action.payload
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case types.LOGOUT_USER:
            return {
                ...state,
                user:null,
            }
        case types.SET_ERROR_EMPTY:
            return {
                ...state,
                error:null,
            }
        default:
            return state;
    }
}
export default authReducer;