/* eslint-disable react-hooks/exhaustive-deps */
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

  const [isValid, setIsValid] = React.useState(false);

  const {
    name,
    email,
    nameError,
    emailError,
    handleChangeEmail,
    handleChangeName,
    setName,
    setEmail,
    setNameError,
    setEmailError,
  } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      email,
    });
  }

  React.useEffect(() => {
    if (
      name
      && email
      && !nameError
      && !emailError
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, email, nameError, emailError]);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setNameError('');
    setEmailError('');
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
            type="text"
            autoComplete="off"
            required
            className="profile__input"
            minLength="2"
            value={name || ''}
            onChange={handleChangeName}

          />
        </label>
        <span className="register__error">{nameError}</span>
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
            value={email || ''}
            onChange={handleChangeEmail}
          />
        </label>
        <span className="register__error">{emailError}</span>
        <button
          onClick={handleSubmit}
          className={`profile__button ${!isValid ? 'profile__button_disabled' : ''}`}
          disabled={!isValid
            || (name === currentUser.name
              && email === currentUser.email)}
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
