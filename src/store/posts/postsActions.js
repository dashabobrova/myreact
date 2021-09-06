import { ENDPOINT, ENDPOINTS } from '../../api';

export const CHANGE_POSTS_LOADING = 'CHANGE_POSTS_LOADING';

export const CHANGE_POSTS_ERROR = 'CHANGE_POSTS_ERROR';

export const CHANGE_POSTS_DATA = 'CHANGE_POSTS_DATA';


export const changePostsLoading = (isLoading) => ({
    type: CHANGE_POSTS_LOADING,
    payLoad: isLoading
});

export const changePostsError = (error) => ({
    type: CHANGE_POSTS_ERROR,
    payLoad: error
});

export const changePostsData = (posts) => ({
    type: CHANGE_POSTS_DATA,
    payLoad: posts
});

export const getPostsAction = () => async (dispatch, useState) => {

    dispatch(changePostsLoading(true))
    dispatch(changePostsError(null))
    dispatch(changePostsData(null))

    try {
        const url = [
            ENDPOINT,
            ENDPOINTS.posts,
        ].join('')

        const response = await fetch(url);

        const result = await response.json();

        dispatch(changePostsData(result))

    } catch (e) {
        dispatch(changePostsError(e))
        console.dir(e);
    }

    dispatch(changePostsLoading(false))
}