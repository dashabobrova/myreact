import {  CHANGE_POSTS_LOADING, CHANGE_POSTS_ERROR, CHANGE_POSTS_DATA} from '../../store/posts/postsActions'

const initialState = {
    isLoading: false,
    error: null,
    data: null
}

export const postsReducer = ( state = initialState, action) => {

    switch(action.type) {

        case CHANGE_POSTS_LOADING: {
            return {
                ...state,
                isLoading: action.payLoad
            }
        }

        case CHANGE_POSTS_ERROR: {
            return {
                ...state,
                error: action.payLoad
            }
        }

        case CHANGE_POSTS_DATA: {
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