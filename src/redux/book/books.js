/* eslint-disable no-case-declarations */
// import { v4 as uuidv4 } from 'uuid';

import { getApiBooks, addApiBooks, removeApiBook } from '../../api_bookstore';

const ADD_BOOK = 'src/redux/book/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/book/REMOVE_BOOK';
const UPDATE_BOOKS = 'src/redux/book/UPDATE_BOOKS';

const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.newbook,
      ];

    case REMOVE_BOOK:
      return [...state.filter((el) => el.id !== action.id)];

    case UPDATE_BOOKS:
      return action.books;
    default:
      return state;
  }
}

export const addBooks = (newbook) => async (dispatch) => {
  addApiBooks(newbook);
  dispatch({
    type: ADD_BOOK,
    newbook,
  });
};

export const removeBook = (id) => async (dispatch) => {
  removeApiBook(id);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export const updateBook = () => async (dispatch) => {
  const books = await getApiBooks();
  dispatch({
    type: UPDATE_BOOKS,
    books,
  });
};
