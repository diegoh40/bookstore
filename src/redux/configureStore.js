import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './book/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reduce: {
    books: booksReducer,
    categories: categoriesReducer,
  },

});

export default store;
