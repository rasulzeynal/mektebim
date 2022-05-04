import { ADD_USER, LIST_USERS } from "./userActionTypes";

const userReducer = (state={},action) => {
    switch (action.type) {
        case LIST_USERS : 
            return {...state,users:action.payload};
        case ADD_USER:
            const users = state.users.concat(action.payload);
            return {...state,users};
        default:
            return state;
    }
}

export default userReducer;