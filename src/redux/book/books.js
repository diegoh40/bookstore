/* eslint-disable no-case-declarations */
import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = '../redux/book/ADD_BOOK';
const REMOVE_BOOK = '../redux/book/REMOVE_BOOK';

const initialState = [
  {
    title: '100 años de soledad',
    author: 'Gabriel Garcia Márquez',
    id: uuidv4(),
  },
  {
    title: 'Metamorfosis',
    author: 'Frank Kafka',
    id: uuidv4(),
  },
];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.newbook,
      ];

    case REMOVE_BOOK:
      const newState = state.slice();
      return newState.filter((el) => el.id !== action.id);

    default:
      return state;
  }
}

export const addBooks = (newbook) => ({
  type: ADD_BOOK,
  newbook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
