import React from "react";
import { useParams } from "react-router";
import { CommentList } from "../../components/CommentList/CommentList";

export const Comments = () => {
const {postId} = useParams; 
    
    return (
        <div>
            <h1>comments</h1>
                postId: {postId}
            <CommentList comments={[]} />
        </div>
    )
}