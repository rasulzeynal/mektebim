import {courseData} from "../../api/courseData";

const INITIAL_STATE = {
    courses:courseData
}
export const reducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {

        case "YENI_KURS" :
            return {...state,courses:[...courses,action.payload]}
            default: return state
    }
}