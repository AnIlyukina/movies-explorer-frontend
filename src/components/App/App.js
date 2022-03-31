/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Main from '../Main/Main'
import React from "react";
import headerLogo from "../../images/header__logo.svg";

function App() {
  return (
    <div className="body">
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип"/>
        <div className="header__links">
          <a className="header__link header__link_type_signup" href="#">Регистрация</a>
          <a className="header__link header__link_type_signin" href="#"> Войти</a>
      </div>
    </header>
    <Main/>
    <footer className='footer'>
      <div className='footer__content'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className='footer__info'>
        <p className="footer__copyright">&copy; 2022</p>
        <div className="footer__links">
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
          <a className="footer__link">Facebook</a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
