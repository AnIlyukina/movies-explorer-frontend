import React from "react";
import { Link } from "react-router-dom";
import './BurgerMenu.css'

function BurgerMenu(props){

  return(
    <section className={`burger-menu ${props.isOpen ? 'burger-menu_opened' : ''}`}>
      <button 
        className="burger-menu__close-button"
        onClick={props.onClose}
      ></button>
      <div className="burger_menu__movies-links">
        <Link className="burger_menu__movies-link">Главная</Link>
        <Link className="burger_menu__movies-link active">Фильмы</Link>
        <Link className="burger_menu__movies-link">Сохраненные фильмы</Link>
      </div>
      <div className="burger_menu__profile-block">
        <div className="burger_menu__profile-links">
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
        </div>
      </div>
    </section>
  )
}

export default BurgerMenu