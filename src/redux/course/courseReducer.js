import { LIST_COURSES } from "./courseActionTypes";

const courseReducer = (state={},action) => {
    switch (action.type) {
        case LIST_COURSES : 
            return {...state,users:action.payload};
        default:
            return state;
    }
}

export default courseReducer;
