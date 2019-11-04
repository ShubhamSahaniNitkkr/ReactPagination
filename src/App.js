import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPagePost] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoader(true);
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(result.data);
      setLoader(false);
    };
    fetchPost();
  }, []);

  // get current posts
  const indexofLastPost = currentPage * perPagePost;
  const indexofFirstPost = indexofLastPost - perPagePost;
  const currentPost = posts.slice(indexofFirstPost, indexofLastPost);

  // change page
  const paginate = index => {
    setCurrentPage(index);
  };
  // console.log('getting posts', posts);
  return (
    <div className='container-fluid'>
      <h1 className='text-info'>Pagination</h1>
      <Posts posts={currentPost} loader={loader} />
      <Pagination
        perPagePost={perPagePost}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
