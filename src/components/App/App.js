/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Main from '../Main/Main'
import React from "react";
import headerLogo from "../../images/header__logo.svg";
import Register from '../Register/Register'
import { Route, Switch, Link, withRouter } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import Login from '../Login/Login'
import Movies from '../Movies/Movies';
import ImageFilm from '../../images/image__film.png'


const moviesCard = [
  {
    id: 1,
    duration: 27,
    image: ImageFilm,
    nameRU: "В погоне за Бенкси"
  },
  {
    id: 2,
    duration: 27,
    image: ImageFilm,
    nameRU: "В погоне за Бенкси"
  },
  {
    id: 3,
    duration: 27,
    image: ImageFilm,
    nameRU: "В погоне за Бенкси"
  },
];


function App() {
  return (
    <div className="body">
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Логотип"/>
        <div className="header__links">
          <Link to="sign-up" className="header__link header__link_type_signup" href="#">Регистрация</Link>
          <Link to="sign-in" className="header__link header__link_type_signin" href="#"> Войти</Link>
        </div>
      </header>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/sign-up'>
          <Register/>
        </Route>
        <Route path='/movies'>
          <Movies
            moviesCard={moviesCard}
          />
        </Route>
        <Route path='/sign-in'>
          <Login />
        </Route>
      </Switch>
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

export default withRouter(App)
