export const ENDPOINT = 'https://jsonplaceholder.typicode.com';

export const ENDPOINTS = {
    posts: '/posts',
    comments: '/comments?postId=:postId'
}

/* использование: 
    const url = [
        ENDPOINT,
        ENDPOINTS.posts,
    ].join('') 
*/