import { CHANGE_CHECKBOX} from "./checkboxActions"


const initialState = {
    status: true
}

export const checkboxReducer = (state = initialState, action) => {
    switch(action.type) {

        case CHANGE_CHECKBOX: {
            return { 
                status: !state.status 
               /*  Пишу не (status: !action.payLoad.status ), а (status: !state.status), потому что у state всего 1 поле
                если бы было больше полей, то нужно было бы {...state, } чтобы сохранить старые поля */
            }
        }

        default: {
            return state
        }
    }

}
