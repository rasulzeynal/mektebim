import {LIST_COURSES} from "./courseActionTypes";
import axios from "axios";

export const getCourses = () => {
    return (dispatch) => {
        axios.get("http://localhost:3002/courseData")
        .then(response => {
            dispatch({
                type: LIST_COURSES,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}