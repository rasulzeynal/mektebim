import {LIST_USERS, LOGIN, LOGOUT } from "./userActionTypes";


export const initialState = {
    isAuth: !!localStorage.getItem("jwttoken"),
    role: localStorage.getItem('role') ? localStorage.getItem('role') : "GUEST",
}

export default (state = initialState,action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({},state,{
                isAuth:true,
                role: action.role
            })

        case LOGOUT:
            return Object.assign({},state,{
                isAuth: false
            })
        case LIST_USERS:
            if (!action.id) {
                return Object.assign({},state,{
                    staticData: {
                        ...state.staticData,
                        [action.key]: action.data
                    }
                })
            } else {
                return Object.assign({}, state, {
                    staticData: {
                      ...state.staticData,
                      [action.key]: {
                        ...state.staticData[action.key],
                        [action.id]: action.data
                      }
                    }
                  })
            }

            default:
                return state
    }
}

/* const userReducer = (state={},action) => {
    switch (action.type) {
        case LIST_USERS : 
            return {...state,users:action.payload};
        default:
            return state;
    }
}

 */