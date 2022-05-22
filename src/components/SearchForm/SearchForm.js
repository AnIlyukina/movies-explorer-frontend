/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/icon__search.svg';

function SearchForm(props) {
  function handleChange(e) {
    props.handleFilterMovies(e.target.value);
  }

  function handleChangeTypeFilm(e) {
    props.handleFilterMoviesType(+e.target.value);
  }

  return (
    // eslint-disable-next-line react/jsx-indent
    <form type="submit" className="search-form">
      <div className="search-form__block-search">
        <img
          className="search-form__icon"
          src={searchIcon}
          alt="Поиск"
        />
        <input
          className="search-form__search-input"
          type="text"
          placeholder={props.errorSearch ? props.errorSearch : 'Фильм'}
          required
          value={props.searchFilm || ''}
          onChange={handleChange}
        />
        <button
          type="button"
          aria-label="filter"
          className="search-form__button"
          onClick={props.filterMovies}
        />
      </div>
      <div className="search-form__block-type">
        <div className="search-form__border" />
        <label
          className="search-form__range-label"
          htmlFor="filmType"
        >
          <input
            className="search-form__range-input"
            type="range"
            name="filmType"
            min={0}
            max={1}
            value={props.typeFilmFilter}
            onChange={handleChangeTypeFilm}
            required
          />
        </label>
        <span className="search-form__type-film">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
