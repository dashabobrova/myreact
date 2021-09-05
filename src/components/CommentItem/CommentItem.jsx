import React from 'react';
import propTypes from 'prop-types';

export const CommentItem = ({postId, id, name, email, body}) => {
  return (
    <div>
      <h6>postId:{postId}</h6>
      <h4>{name}</h4>
      <h5>{email}</h5>
      <p>{body}</p>
      <br />
    </div>
  );
};

CommentItem.propTypes = {
  messages: propTypes.arrayOf(propTypes.shape({
      postId: propTypes.string,
      id: propTypes.string,
      name: propTypes.string,
      email: propTypes.string,
      body: propTypes.string,
  }))
}
