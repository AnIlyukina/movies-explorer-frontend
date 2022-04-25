/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';

import './MoviesCard.css';

function MoviesCard({
  movie, handleSaveMovie, location, handleDeleteMovie, saved,
}) {
  function saveMovie() {
    handleSaveMovie(movie);
  }

  function deleteMovie() {
    handleDeleteMovie(movie);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__name">
          {movie.nameRU}
        </p>
        <span className="movies-card__time">
          {movie.duration}
          {' '}
          минут
        </span>
      </div>
      <img
        className="movies-card__image"
        src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
        alt="Постер фильма"
      />
      {location.pathname === '/saved-movies'
        && (
          <button
            className="movies-card__button delete"
            onClick={deleteMovie}
          />
        )}
      {location.pathname === '/movies'
        && (
          <button
            className={saved ? 'movies-card__button saved' : 'movies-card__button'}
            onClick={saveMovie}
          >
            {saved ? ' ' : 'Сохранить'}
          </button>
        )}

    </li>
  );
}

export default MoviesCard;
