import { ADD_COURSE, LIST_COURSES } from "./courseActionTypes";

const courseReducer = (state={},action) => {
    switch (action.type) {
        case LIST_COURSES : 
            return {...state,users:action.payload};
        case ADD_COURSE :
            return {...state,courses:action.payload}
        default:
            return state;
    }
}

export default courseReducer;
