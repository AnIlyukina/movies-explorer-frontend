/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useForm from '../../Hooks/useForm';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    handleChange, values, errors, isValid,
  } = useForm();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      name: values.name,
      email: values.email,
    });
  }

  React.useEffect(() => {
    values.name = currentUser.name;
    values.email = currentUser.email;
  }, [currentUser]);

  return (
    <section className="profile">
      <form className="form">
        <h1 className="profile__greetings">
          Привет,
          {' '}
          {currentUser.name}
          !
        </h1>
        <label
          htmlFor="profile-name"
          className="profile__label"
        >
          Имя
          <input
            id="profile-name"
            name="userName"
            placeholder="Анна"
            type="text"
            autoComplete="off"
            required
            className="profile__input"
            value={values.userName || ''}
            onChange={handleChange}
          />
        </label>
        <span className="register__error">{errors.userName}</span>
        <label
          htmlFor="profile-email"
          className="profile__label"
        >
          E-mail
          <input
            id="profile-email"
            name="email"
            placeholder="anna@yandex.ru"
            type="email"
            autoComplete="off"
            required
            className="profile__input"
            value={values.email || ''}
            onChange={handleChange}
          />
        </label>
        <span className="register__error">{errors.email}</span>
        <button
          onClick={handleSubmit}
          className={`profile__button ${!isValid ? 'profile__button_disabled' : ''}`}
          type="submit"
        >
          Редактировать
        </button>
        <a
          className="profile__link-exit"
        >
          Выйти из аккаунта
        </a>
      </form>
    </section>
  );
}

export default Profile;
