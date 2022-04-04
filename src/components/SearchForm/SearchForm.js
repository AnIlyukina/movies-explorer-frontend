/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './SearchForm.css'
import searchIcon from "../../images/icon__search.svg"


function SearchForm(){
  return(
      <form className="search-form">
        <img  className="search-form__icon" src={searchIcon}/>
        <input className="search-form__input" type='text' placeholder='Фильм'/>
        <button className="search-form__button"></button>
        <div className="search-form__border"></div>
        <label className="search-form__label" for="filmType">
            <input className="search-form__range" type="range" id="filmType" name="filmType" min="1" max="2"/>
        </label>
        <span className="search-form__type-film">Короткометражки</span>
      </form>
  )
}

export default SearchForm