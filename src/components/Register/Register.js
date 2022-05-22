/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */
import React from 'react';
import './Register.css';
import { Link, withRouter } from 'react-router-dom';
import HeaderLogoLink from '../HeaderLogoLink/HeaderLogoLink';
import useForm from '../../Hooks/useForm';

function Register(props) {
  const [isValid, setIsValid] = React.useState(false);
  const {
    name,
    email,
    password,
    nameError,
    emailError,
    passwordError,
    handleChangePassword,
    handleChangeEmail,
    handleChangeName,
  } = useForm();

  React.useEffect(() => {
    if (
      name
      && email
      && password
      && !nameError
      && !emailError
      && !passwordError
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, email, password, nameError, emailError, passwordError]);

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmitRegister(name, email, password);
  }

  return (
    <section className="register">
      <form className="form">
        <div className="register__form-inputs">
          <HeaderLogoLink />
          <h1 className="register__title">Добро пожаловать!</h1>
          <label
            htmlFor="register-name"
            className="redister__label"
          >
            Имя
            <input
              id="register-name"
              name="userName"
              type="text"
              placeholder="Anna"
              className="register__input register__input_type_name"
              autoComplete="off"
              required
              minLength="2"
              value={name || ''}
              onChange={handleChangeName}
            />
            <span className="register__error">{nameError}</span>
          </label>
          <label
            className="redister__label"
            htmlFor="register-email"
          >
            E-mail
            <input
              id="register-email"
              name="email"
              placeholder="anna@yandex.ru"
              type="email"
              className="register__input register__input_type_email"
              autoComplete="off"
              required
              value={email || ''}
              onChange={handleChangeEmail}
            />
            <span className="register__error">{emailError}</span>
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
              minLength="8"
              value={password || ''}
              onChange={handleChangePassword}
            />
            <span className="register__error">{passwordError}</span>
          </label>
        </div>
        <div>
          <button onClick={handleSubmit} className={`register__button ${!isValid ? 'register__button_disabled' : ''}`} type="submit">
            {`${props.isLoading ? 'Регистрация...' : 'Зарегистрироваться'}`}
          </button>
          <p className="register__link">
            Уже зарегистрированы?
            <Link to="/sign-in" className="register__link-login">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default withRouter(Register);
