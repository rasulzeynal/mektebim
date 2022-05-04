import { ADD_USER, LIST_USERS } from "./userActionTypes";
import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        axios.get("http://localhost:3002/data")
        .then(response => {
            dispatch({
                type: LIST_USERS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const addUser = userData => {
    return (dispatch) => {
        axios.post("http://localhost:3002/data",userData)
        .then(response => {
            dispatch({
                type: ADD_USER,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

