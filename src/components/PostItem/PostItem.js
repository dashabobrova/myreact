import React from 'react';
import {Link} from "react-router-dom";
import propTypes from 'prop-types';

export const PostItem = ({userId, id, title, body}) => {
    
  return (
    <div>
      <h5>userId: {userId}</h5>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={`/posts/comments/${id}`}>
        open comments
      </Link>
      <br/>
    </div>
  );
};

PostItem.propTypes = {
  messages: propTypes.arrayOf(propTypes.shape({
      userId: propTypes.string,
      id: propTypes.string,
      title: propTypes.string,
      body: propTypes.string,
  }))
}
