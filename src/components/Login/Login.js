/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Login.css'
import LoginLogo from "../../images/header__logo.svg";
import { Link, withRouter } from 'react-router-dom'; 

function Login(){
  return(
    <section className="login">
    <form className="login__form">
      <div className="login__form-inputs">
        <img className="login__logo" src={LoginLogo} alt="Логотип"/>
        <h1 className="login__title">Рады видеть!</h1>
        <label className="login__label">
          E-mail
          <input
            id="login-email"
            name="email"
            placeholder="anna@yandex.ru"
            type="email"
            className="login__input login__input_type_email"
            autoComplete="off"
            required
          />
          <span className="login__error"></span>
        </label>
        <label className="login__label">
          Пароль
          <input
            id="login-password"
            name="password"
            type="password"
            className="login__input login__input_type_password"
            autoComplete="off"
            required
          />
          <span className="login__error">Что-то пошло не так...</span>
        </label>
      </div>
      <div>
        <button className='login__button' >Войти</button>
        <a className="login__link" >Еще не зарегистрированы? 
          <Link to="sign-up" className="login__link-register"> Регистрация</Link>
        </a>
      </div>
    </form>
  </section>
  )
}

export default withRouter(Login)