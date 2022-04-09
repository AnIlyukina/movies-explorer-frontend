import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLogoLink.css';

function HeaderLogoLink() {
  return (
    <Link
      to="/"
      className="header__logo-link"
    />
  );
}

export default HeaderLogoLink;
