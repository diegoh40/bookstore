import React from 'react';

const Book = ({ title, author }) => // props
/*  const { title } = props;
  const { author } = props; */
  (
    <div>
      <h2> Romantic</h2>
      <p>
        Title :
        {title}
      </p>
      <p>
        Author :
        {author}
      </p>
      <button type="button">Remove</button>
    </div>
  );
export default Book;
