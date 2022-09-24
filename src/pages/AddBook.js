import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/book/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  return (
    <form className="form-container">
      <h3>ADD NEW BOOK</h3>
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
      <input
        type="text"
        className="input-text"
        placeholder="Add category..."
        name="category"
        value={category}
        onInput={(e) => setCategory(e.target.value)}
      />

      <button
        type="submit"
        className="input-submit"
        onClick={(e) => {
          e.preventDefault();
          const newBook = {
            id: uuidv4(),
            title,
            author,
            category,
          };

          dispatch(addBooks(newBook));
          setAuthor('');
          setTitle('');
          setCategory('');
        }}
      >
        ADD BOOK

      </button>
    </form>
  );
};

export default AddBook;
