/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import './Header.css'
import headerLogo from "../../images/header__logo.svg";
import { Link, useLocation } from 'react-router-dom'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header(){

  const location = useLocation();

  const[loggedIn, setLoggedIn] = React.useState(false);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if(location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile'){
      setLoggedIn(true)
    }
  }, []);

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }


  return(
    <header className= {`${!loggedIn ? 'header' : 'header header_type_auth'}`}>
      <img className="header__logo" src={headerLogo} alt="Логотип"/>
      <div className="header__links">

        {loggedIn && isMobile && (
          <>
            <button 
              type="button"
              className="header__button-menu"
              onClick={handleBurgerMenuClick}
            >
            </button>
          </>
        )}

        {loggedIn && (
          <>
            <BurgerMenu
              isOpen={isBurgerMenuOpen}
              onClose={handleBurgerMenuClick}
            />
          </>
        )}

        {
          !loggedIn &&(
            <>
            <Link 
              to="sign-up" 
              className="header__link header__link_type_signup" 
            >
              Регистрация
            </Link>
            <Link 
              to="sign-in" 
              className="header__link header__link_type_signin" 
            > 
              Войти
            </Link>
          </>
          )
        }
        {
          loggedIn && !isMobile &&(
            <>
            <Link 
              to="/movies" 
              className="header__link header__link_type_movies" 
            >
              Фильмы
            </Link>
            <Link 
              to="/saved-movies" 
              className="header__link header__link_type_saved-movies" 
            > 
              Сохраненные фильмы
            </Link>
            <Link 
              to="/profile" 
              className="header__link header__link_type_profile" 
            > 
              Аккаунт
            </Link>
            <Link 
              to="/profile" 
              className="header__icon-account" 
            > 
            </Link>
          </>
          )
        }
      </div>
    </header>
  )
}

export default Header