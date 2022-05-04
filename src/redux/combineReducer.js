import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
import courseReducer from "./course/courseReducer"


export default combineReducers({
    user:userReducer,
    course:courseReducer
})