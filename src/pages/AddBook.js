import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/book/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form className="form-container">
      <h1>ADD NEW BOOK</h1>
      <input
        type="text"
        className="input-text"
        placeholder="Add title..."
        name="title"
        value={title}
        onInput={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input-text"
        placeholder="Add author..."
        name="author"
        value={author}
        onInput={(e) => setAuthor(e.target.value)}
      />

      <button
        type="submit"
        className="input-submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addBooks({
            title,
            author,
            id: uuidv4(),
          }));
          setAuthor('');
          setTitle('');
        }}
      >
        Submit

      </button>
    </form>
  );
};

export default AddBook;
