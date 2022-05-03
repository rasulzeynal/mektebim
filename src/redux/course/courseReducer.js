import { ADD_NEW_COURSE } from "./courseActionTypes"

const INITIAL_STATE = [
        {
            id:1,
            name:"Ingilis dili"
        },
        {
            id:2,
            name:"IELTS"
          }
        ]


export const courseReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
         case ADD_NEW_COURSE :return [
            ...state,
            {
            name:action.courseName
            }
        ]
            default: return state
    }
}