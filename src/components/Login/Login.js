/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import HeaderLogoLink from '../HeaderLogoLink/HeaderLogoLink';
import useForm from '../../Hooks/useForm';

function Login(props) {
  const {
    handleChange, values, errors, isValid,
  } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmitLogin(values.login, values.password);
  }

  return (
    <section className="login">
      <form className="form">
        <div className="login__form-inputs">
          <HeaderLogoLink />
          <h1 className="login__title">Рады видеть!</h1>
          <label
            htmlFor="login-password"
            className="login__label"
          >
            E-mail
            <input
              id="login-email"
              name="login"
              placeholder="anna@yandex.ru"
              type="email"
              className="login__input login__input_type_email"
              autoComplete="off"
              required
              value={values.login || ''}
              onChange={handleChange}
            />
            <span className="login__error">{errors.login}</span>
          </label>
          <label
            htmlFor="login-password"
            className="login__label"
          >
            Пароль
            <input
              id="login-password"
              name="password"
              type="password"
              className="login__input login__input_type_password"
              autoComplete="off"
              required
              minLength="8"
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className="login__error">{errors.password}</span>
          </label>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className={`login__button ${!isValid ? 'register__button_disabled' : ''}`}
            type="submit"
          >
            {`${props.isLoading ? 'Вход...' : 'Войти'}`}
          </button>
          <p className="login__link">
            Еще не зарегистрированы?
            <Link to="sign-up" className="login__link-register"> Регистрация</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default withRouter(Login);
