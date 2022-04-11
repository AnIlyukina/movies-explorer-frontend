/* eslint-disable react/jsx-no-bind */
import React from 'react';
import './Header.css';
import { Link, useLocation, NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import HeaderLogoLink from '../HeaderLogoLink/HeaderLogoLink';

function Header() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    if (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {
      setLoggedIn(true);
    }
    if (location.pathname === '/') {
      setLoggedIn(false);
    }
  }, [location.pathname]);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    <header className={`${!loggedIn ? 'header' : 'header header_type_auth'}`}>
      <HeaderLogoLink />
      <nav className="header__links">

        {loggedIn && isMobile && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            className="header__button-menu"
            onClick={handleBurgerMenuClick}
          />
        )}

        {loggedIn && (
          <BurgerMenu
            isOpen={isBurgerMenuOpen}
            onClose={handleBurgerMenuClick}
          />
        )}

        {
          !loggedIn && (
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
          loggedIn && !isMobile && (
            <>
              <NavLink
                to="/movies"
                className="header__link header__link_type_movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="header__link header__link_type_saved-movies"
              >
                Сохраненные фильмы
              </NavLink>
              <NavLink
                to="/profile"
                className="header__link header__link_type_profile"
              >
                Аккаунт
              </NavLink>
              <Link
                to="/profile"
                className="header__icon-account"
              />
            </>
          )
        }
      </nav>
    </header>
  );
}

export default Header;
