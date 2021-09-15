import React from 'react';
import { CommentItem } from '../CommentItem/CommentItem';
import propTypes from 'prop-types';

export const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment) => <CommentItem key={comment.id} {...comment}/>)}
    </div>
  );
};

CommentList.propTypes = {
  comments: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number,
  }))
}
// id number (в json)