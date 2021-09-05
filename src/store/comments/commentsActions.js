import { ENDPOINTS, ENDPOINT } from '../../api/endpoints';


export const CHANGE_COMMENTS_LOADING = 'CHANGE_COMMENTS_LOADING';

export const CHANGE_COMMENTS_ERROR = 'CHANGE_COMMENTS_ERROR';

export const CHANGE_COMMENTS_DATA = 'CHANGE_COMMENTS_DATA';


export const changeCommentsLoading = (isLoading) => ({
    type: CHANGE_COMMENTS_LOADING,
    payLoad: isLoading
});

export const changeCommentsError = (error) => ({
    type: CHANGE_COMMENTS_ERROR,
    payLoad: error
});

export const changeCommentsData = (comments) => ({
    type: CHANGE_COMMENTS_DATA,
    payLoad: comments
});

export const getCommentsAction = (postId) => async (dispatch, useState) => {

    dispatch(changeCommentsLoading(true))
    dispatch(changeCommentsError(null))
    dispatch(changeCommentsData(null))

    try {
        const url = [
            ENDPOINT,
            ENDPOINTS.comments.replace(
                ':postId',
                postId
            )
        ].join('');

        const response = await fetch(url);

        const result = await response.json();

        dispatch(changeCommentsData(result))

    } catch (e) {
        dispatch(changeCommentsError(e))
        console.dir(e);
    }

    dispatch(changeCommentsLoading(false))
}