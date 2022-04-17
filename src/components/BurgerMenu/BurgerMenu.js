/* eslint-disable react/destructuring-assignment */
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
          onClick={props.onClose}
        >
          Главная
        </NavLink>
        <NavLink
          to="/movies"
          className="burger_menu__movies-link active"
          onClick={props.onClose}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="burger_menu__movies-link"
          onClick={props.onClose}
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className="burger_menu__profile-block">
        <div className="burger_menu__profile-links">
          <NavLink
            to="/profile"
            className="header__link header__link_type_profile"
            onClick={props.onClose}
          >
            Аккаунт
          </NavLink>
          <NavLink
            to="/profile"
            className="header__icon-account"
            onClick={props.onClose}
          />
        </div>
      </div>
    </section>
  );
}

export default BurgerMenu;
