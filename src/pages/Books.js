/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { updateBook } from '../redux/book/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateBook());
  }, []);

  return (

    <div>
      <ul>
        {books.map((el) => (
          <Book key={el.id} id={el.id} title={el.title} author={el.author} category={el.category} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
