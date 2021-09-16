import { LOGIN_USER, LOGOUT_USER } from "./userActions"


const InitialState = {
    user: null,
}

export const userReducer = ( state = InitialState, action) => {
    switch (action.type) {

        case LOGIN_USER: {
            return {
                user: action.payLoad
            }
        }

        case LOGOUT_USER: {
            return {
                user: null
            }
        }

        default: {
            return state
        }
    }
}