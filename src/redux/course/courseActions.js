import { ADD_NEW_COURSE } from "./courseActionTypes";
import data from "../../api/courseData


export const addNewCourse = (courseName) => {
    return {
        type: ADD_NEW_COURSE,
        payload:data
    }
}