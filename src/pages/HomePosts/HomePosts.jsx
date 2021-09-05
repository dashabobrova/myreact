import React, { useEffect } from "react";
import { PostList } from "../../components/PostList/PostList";
import s from './HomePosts.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import { postsSelectors } from "../../store/posts";
import { getPostsAction } from "../../store/posts";

export const HomePosts = (props) => {
    const dispatch = useDispatch()

    const posts = useSelector(postsSelectors.getPostsData)
    const isLoading = useSelector(postsSelectors.getPostsLoading)
    const error = useSelector(postsSelectors.getPostsError)

    useEffect(() => {
        dispatch( getPostsAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div className={s.wrapper}>
            <h1>posts</h1>
            <button onClick={() => dispatch(getPostsAction())}>reload</button>
            {
                isLoading && <div>is loading: {isLoading}</div>
            }

            {
                error && <div>
                    error: {error.toString()}
                </div>
            }

            {
                posts && <PostList posts={posts} />
            }  
        </div>
    )
}

// <button onClick={getPosts}>reload</button>