/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu(props) {
  return (
    <section className={`burger-menu ${props.isOpen ? 'burger-menu_opened' : ''}`}>
      <button
        className="burger-menu__close-button"
        onClick={props.onClose}
      />
      <div className="burger_menu__movies-links">
        <NavLink
          exact
          to="/"
          className="burger_menu__movies-link"
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="burger_menu__movies-link active"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="burger_menu__movies-link"
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className="burger_menu__profile-block">
        <div className="burger_menu__profile-links">
          <NavLink
            to="/profile"
            className="header__link header__link_type_profile"
          >
            Аккаунт
          </NavLink>
          <NavLink
            to="/profile"
            className="header__icon-account"
          />
        </div>
      </div>
    </section>
  );
}

export default BurgerMenu;
