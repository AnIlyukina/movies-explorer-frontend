/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React from 'react';
import './Register.css';
import { Link, withRouter } from 'react-router-dom';
import HeaderLogoLink from '../HeaderLogoLink/HeaderLogoLink';

function Register() {
  return (
    <section className="register">
      <form className="register__form">
        <div className="register__form-inputs">
          <HeaderLogoLink />
          <h1 className="register__title">Добро пожаловать!</h1>
          <label className="redister__label">
            Имя
            <input
              id="register-name"
              name="user-name"
              type="text"
              placeholder="Anna"
              className="register__input register__input_type_name"
              autoComplete="off"
              required
            />
            <span className="register__error" />
          </label>
          <label className="redister__label">
            E-mail
            <input
              id="register-email"
              name="email"
              placeholder="anna@yandex.ru"
              type="email"
              className="register__input register__input_type_email"
              autoComplete="off"
              required
            />
            <span className="register__error" />
          </label>
          <label className="redister__label">
            Пароль
            <input
              id="register-password"
              name="password"
              type="password"
              className="register__input register__input_type_password"
              autoComplete="off"
              required
            />
            <span className="register__error">Что-то пошло не так...</span>
          </label>
        </div>
        <div>
          <button className="register__button">Зарегистрироваться</button>
          <a className="register__link">
            Уже зарегистрированы?
            <Link to="/sign-in" className="register__link-login">
              Войти
            </Link>
          </a>
        </div>
      </form>
    </section>
  );
}

export default withRouter(Register);
