/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLogoLink.css';

function HeaderLogoLink({ signOut }) {
  return (
    <Link
      to="/"
      className="header__logo-link"
      onClick={signOut}
    />
  );
}

export default HeaderLogoLink;
