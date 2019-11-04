import React from 'react';

const Pagination = ({ perPagePost, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPagePost); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(index => (
          <li className='page-item' key={index}>
            <a onClick={() => paginate(index)} href='!#' className='page-link'>
              {index}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
