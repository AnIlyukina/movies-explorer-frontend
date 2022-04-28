/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isOpen, onClose }) {
  return (
    <section className={`burger-menu ${isOpen ? 'burger-menu_opened' : ''}`}>
      <button
        className="burger-menu__close-button"
        onClick={onClose}
      />
      <div className="burger_menu__movies-links">
        <NavLink
          exact
          to="/"
          className="burger_menu__movies-link"
          onClick={onClose}
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="burger_menu__movies-link"
          onClick={onClose}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="burger_menu__movies-link"
          onClick={onClose}
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className="burger_menu__profile-block">
        <div className="burger_menu__profile-links">
          <NavLink
            to="/profile"
            className="header__link header__link_type_profile"
            onClick={onClose}
          >
            Аккаунт
          </NavLink>
          <NavLink
            to="/profile"
            className="header__icon-account"
            onClick={onClose}
          />
        </div>
      </div>
    </section>
  );
}

export default BurgerMenu;
