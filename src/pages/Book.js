/* eslint-disable react/jsx-key */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/book/books';
import sixty from '../img/sixty.jpg';
import ten from '../img/ten.jpg';

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
      <div className="info">
        <h6>{category}</h6>
        <h4>{title}</h4>
        <h6>{author}</h6>

        <button
          type="button"
        >
          Comments
        </button>
        <button
          type="button"
          onClick={handleDelete}
        >
          Remove

        </button>
        <button
          type="button"
        >
          Edit
        </button>
      </div>
      <div className="imagen">
        <img src={id[0] < 7 ? ten : sixty} alt="cincuenta" />
        <p>Completed</p>
      </div>
      <div className="dta">
        <h6>CURRENT CHAPTER</h6>
        <p> Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
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
