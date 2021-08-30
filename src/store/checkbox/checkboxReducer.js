import { CHANGE_CHECKBOX, CREATE_CHECKBOX } from "./checkboxActions"


const initialState = {
    status: true
}

export const checkboxReducer = (state = initialState, action) => {
    switch(action.type) {

        case CHANGE_CHECKBOX: {
            return { 
                status: !action.payLoad.status 
            }
        }

        default: {
            return state
        }
    }

}
