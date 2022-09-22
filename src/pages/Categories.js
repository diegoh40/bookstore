import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const message = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const buttonStatus = (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        dispatch(checkStatus());
      }}
    >
      Status

    </button>
  );
  const nothing = <p>{message.msj}</p>;
  return (

    <div>
      {message.msj !== '' ? nothing : buttonStatus}
    </div>
  );
};

export default Categories;
