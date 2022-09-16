import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'CATEGORIES',
    },

  ];

  return (
    <nav>
      <ul className="navBar">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} activeClassName="active-link" exact>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
