import { CHANGE_COMMENTS_LOADING, CHANGE_COMMENTS_ERROR, CHANGE_COMMENTS_DATA } from "./commentsActions"


const initialState = {
    isLoading: false,
    error: null,
    data: null
}

export const commentsReducer = ( state = initialState, action) => {

    switch(action.type) {

        case CHANGE_COMMENTS_LOADING: {
            return {
                ...state,
                isLoading: action.payLoad
            }
        }

        case CHANGE_COMMENTS_ERROR: {
            return {
                ...state,
                error: action.payLoad
            }
        }

        case CHANGE_COMMENTS_DATA: {
            return {
                ...state,
                data: action.payLoad
            }

        }

        default: {
            return state;
        }
    }
}