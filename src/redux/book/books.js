const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  book: newBook,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.book);

    case REMOVE_BOOK:
      return state.pop();

    default:
      return state;
  }
}
