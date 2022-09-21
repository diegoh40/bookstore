/* eslint-disable no-case-declarations */
const ADD_BOOK = 'redux/book/ADD_BOOK';
const REMOVE_BOOK = 'redux/book/REMOVE_BOOK';

export const addBook = (newbook) => ({
  type: ADD_BOOK,
  newbook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.newbook,
      ];

    case REMOVE_BOOK:
      const newState = state.slice();
      return newState.filter((el) => el !== newState[action.id]);

    default:
      return state;
  }
}
