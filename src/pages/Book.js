/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/books';

const Book = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  /*  console.log(book[2].id); */
  return (
    <div>
      <div>
        {book.map((el) => (
          <div>
            <h4>
              {el.title}
            </h4>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeBook(el.id));
              }}
            >
              Remove

            </button>
          </div>
        ))}

      </div>
    </div>
  );
};
export default Book;
