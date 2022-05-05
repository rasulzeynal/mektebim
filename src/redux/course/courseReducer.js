import { ADD_COURSE, DELETE_COURSE, LIST_COURSES } from "./courseActionTypes";

const courseReducer = (state={},action) => {
    switch (action.type) {
        case LIST_COURSES : 
            return {...state,users:action.payload};
        case ADD_COURSE :
            const courses = state.users.concat(action.payload);           
            return {...state,courses};
        case DELETE_COURSE :
            const filteredCourses = state.users.filter(course => course.id !== action.payload.id);
            return {...state,users:filteredCourses}
        default:
            return state;
    }
}

export default courseReducer;
