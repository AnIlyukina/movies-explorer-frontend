import React from "react";
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile(){
  return(
    <section className="profile">
      <h1 className="profile__greetings">Привет, Анна!</h1>
      <label className="profile__label">
        Имя
        <input
          className="profile__input"
        />
      </label >
      <label className="profile__label">
        E-mail
        <input
          className="profile__input"
        />
      </label>
      <button
        className="profile__button"
      >
        Редактировать
      </button>
      <Link className="profile__link">Выйти из аккаунта</Link>
    </section>
  )
}

export default Profile