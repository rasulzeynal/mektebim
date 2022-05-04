import { LIST_USERS } from "./userActionTypes";
import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        axios.get("http://localhost:3002/data")
        .then(response => {
            console.log(response);
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

