export const getPosts = (state) => state.posts;

export const getPostsLoading = (state) => getPosts(state).isLoading;

export const getPostsError = (state) => getPosts(state).error;

export const getPostsData = (state) => getPosts(state).data;

export const postsSelectors = {
    getPosts,
    getPostsLoading,
    getPostsError,
    getPostsData
}