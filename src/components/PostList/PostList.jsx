import React from 'react';
import { PostItem } from '../PostItem/PostItem';
import propTypes from 'prop-types';

export const PostList = ({posts}) => {
  return (
    <div>
      {posts?.map((post) => <PostItem key={post.id} {...post}/>)}
    </div>
  );
};

PostList.propTypes = {
  posts: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number
  }))
}