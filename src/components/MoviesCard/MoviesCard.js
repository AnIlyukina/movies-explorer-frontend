/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import './MoviesCard.css';

function MoviesCard({ moviesCard }) {
  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__name">
          {moviesCard.nameRU}
        </p>
        <span className="movies-card__time">
          {moviesCard.duration}
          {' '}
          минут
        </span>
      </div>
      <img className="movies-card__image" src={moviesCard.image} />
      <button className="movies-card__button">Сохранить</button>
    </li>
  );
}

export default MoviesCard;
