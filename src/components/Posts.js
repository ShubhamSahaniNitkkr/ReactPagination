import React from 'react';

const Posts = ({ posts, loader }) => {
  if (loader) {
    return (
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    );
  }
  return (
    <ul className='list-group'>
      {posts.map(post => (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
