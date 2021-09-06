import React, { useEffect } from "react";
import { useParams } from "react-router";
import { CommentList } from "../../components/CommentList/CommentList";
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsAction, commentsSelectors } from '../../store/comments'

export const Comments = () => {
const {postId} = useParams();

const dispatch = useDispatch()

const comments = useSelector(commentsSelectors.getCommentsData)
const isLoading = useSelector(commentsSelectors.getCommentsLoading)
const error = useSelector(commentsSelectors.getCommentsError)

useEffect(() => {
  dispatch( getCommentsAction(postId))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return (
    <div>
        <h1>comments</h1>
        postId: {postId}
        {
            isLoading && <div>is loading: {isLoading}</div>
        }

        {
            error && <div>
                error: {error.toString()}
            </div>
        }

        {
            comments && <CommentList comments={comments} />
        }        
    </div>
    )
}
