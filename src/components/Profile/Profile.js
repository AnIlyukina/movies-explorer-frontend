/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__greetings">Привет, Анна!</h1>
      <label className="profile__label">
        Имя
        <input
          id="profile-name"
          name="profile-name"
          placeholder="Анна"
          type="text"
          autoComplete="off"
          required
          className="profile__input"
        />
      </label>
      <label className="profile__label">
        E-mail
        <input
          id="profile-email"
          name="profile-email"
          placeholder="anna@yandex.ru"
          type="email"
          autoComplete="off"
          required
          className="profile__input"
        />
      </label>
      <button
        className="profile__button"
      >
        Редактировать
      </button>
      <a
        className="profile__link-exit"
      >
        Выйти из аккаунта
      </a>
    </section>
  );
}

export default Profile;
