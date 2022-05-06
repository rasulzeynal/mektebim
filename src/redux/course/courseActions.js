import {
    LIST_COURSES,
    ADD_COURSE,
    DELETE_COURSE
} from "./courseActionTypes";
import axios from "axios";

export const getCourses = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:3002/courseData")
            .then((response) => {
                dispatch({
                    type: LIST_COURSES,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addCourse = courseData => {
    return (dispatch) => {
        axios.post("http://localhost:3002/courseData", courseData)
            .then((response) => {
                dispatch({
                    type: ADD_COURSE,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const deleteCourse = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3002/courseData/${id}`).then(() => {
            dispatch({
            type: DELETE_COURSE,
            payload: id,
            });
        });
    };
};
