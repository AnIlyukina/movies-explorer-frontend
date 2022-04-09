/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon__search.svg';

function SearchForm() {
  return (
    // eslint-disable-next-line react/jsx-indent
    <form type="submit" className="search-form">
      <div className="search-form__block-search">
        <img
          className="search-form__icon"
          alt="Поиск"
          src={searchIcon}
        />
        <input
          className="search-form__search-input"
          type="text"
          placeholder="Фильм"
        />
        <button type="button" className="search-form__button" />
      </div>
      <div className="search-form__block-type">
        <div className="search-form__border" />
        <label className="search-form__range-label" for="filmType">
          <input
            className="search-form__range-input"
            type="range"
            name="filmType"
            min="1"
            max="2"
          />
        </label>
        <span className="search-form__type-film">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
