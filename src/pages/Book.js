/* eslint-disable react/jsx-key */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/book/books';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>

      <p>{category}</p>
      <p>{title}</p>
      <p>{author}</p>

      <button
        type="button"
        onClick={handleDelete}
      >
        Remove

      </button>

    </li>

  );
};
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
