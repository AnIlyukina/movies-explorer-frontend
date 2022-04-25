/* eslint-disable react/no-string-refs */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useForm from '../../Hooks/useForm';

function Profile({ onUpdateUser, signOut }) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    handleChange, values, errors, isValid, setValues, setErrors,
  } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name: values.userName,
      email: values.email,
    });
  }

  React.useEffect(() => {
    setValues({
      ...values,
      userName: currentUser.name,
      email: currentUser.email,
    });
    setErrors({});
  }, []);

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
            type="text"
            autoComplete="off"
            required
            className="profile__input"
            minLength="2"
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
          disabled={!isValid
            || (values.userName === currentUser.name
              && values.email === currentUser.email)}
          type="submit"
        >
          Редактировать
        </button>
        <a
          className="profile__link-exit"
          onClick={signOut}
        >
          Выйти из аккаунта
        </a>
      </form>
    </section>
  );
}

export default Profile;
